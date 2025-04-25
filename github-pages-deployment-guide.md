# GitHub Pages Deployment Guide

This guide provides instructions for configuring GitHub Pages environment protection rules to ensure successful deployments from the main branch.

## Issue: Branch "main" is not allowed to deploy to github-pages

If you encounter the error message "Branch 'main' is not allowed to deploy to github-pages due to environment protection rules", it indicates that GitHub Pages has environment protection rules that are blocking deployments from your branch.

## Fix: Configure the Repository Environment Settings

Follow these steps to configure the environment settings and allow the main branch to deploy to GitHub Pages:

1. **Go to Repository Settings**
   - Navigate to your GitHub repository
   - Click on **Settings** tab

2. **Configure Environments**
   - In the left sidebar, click on **Environments**
   - You should see a `github-pages` environment
   - Click on it to configure

3. **Configure Deployment Rules**
   - Under "Deployment branches and tags", select one of the following:
     - **All branches**: Allows any branch to deploy (least restrictive)
     - **Protected branches**: Allows only protected branches to deploy
     - **Selected branches**: Allows only specific branches to deploy
   - If you select "Selected branches", add `main` to the allowed branches list

4. **Additional Protection Rules (Optional)**
   - You can configure additional protection rules:
     - **Required reviewers**: Require specific people to approve deployments
     - **Wait timer**: Add a delay before deployments
     - **Deployment branches**: Limit which branches can deploy (configure as mentioned above)

5. **Save Changes**
   - Click **Save protection rules** to apply the changes

## Alternate Fix: Update GitHub Actions Workflow

If you're unable to change the environment settings, you can modify your GitHub Actions workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # ... your build steps ...

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

Make sure the `environment` section is correctly defined in your workflow to match the environment name exactly as it appears in your repository settings.

## Branch Protection Rules (Optional)

For additional security, you can also configure branch protection rules for your main branch:

1. Go to **Settings** > **Branches**
2. Under "Branch protection rules", click **Add rule**
3. Enter `main` as the branch name pattern
4. Configure protection options as needed
5. Click **Create** to save the branch protection rule

This will help prevent unwanted changes to your main branch and can work in conjunction with environment protection rules.

## Next Steps

After configuring the environment protection rules, push a commit to the main branch to trigger a new workflow run. The deployment should now proceed without the previous error.

For more detailed information, refer to the [GitHub documentation on managing environments for deployment](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment).