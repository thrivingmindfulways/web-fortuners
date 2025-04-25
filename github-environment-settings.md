# Configuring GitHub Pages Environment Protection Rules

This guide provides visual instructions for configuring GitHub Pages environment protection rules to fix the "Branch is not allowed to deploy to github-pages" error.

## Step 1: Access Repository Settings

Go to your GitHub repository and click on the **Settings** tab in the top navigation bar.

![GitHub Repository Settings Tab](https://raw.githubusercontent.com/thrivingmindfulways/web-fortuners/main/public/images/github-settings-tab.png)

## Step 2: Navigate to Environments

In the left sidebar, scroll down and click on **Environments**.

![GitHub Environments Settings](https://raw.githubusercontent.com/thrivingmindfulways/web-fortuners/main/public/images/github-environments-menu.png)

## Step 3: Configure github-pages Environment

You should see a `github-pages` environment listed. Click on it to configure its settings.

![GitHub Pages Environment](https://raw.githubusercontent.com/thrivingmindfulways/web-fortuners/main/public/images/github-pages-environment.png)

## Step 4: Update Deployment Branch Rules

In the environment settings:

1. Under "Deployment branches and tags", select one of the following options:
   - **All branches**: Allows any branch to deploy
   - **Protected branches**: Allows only protected branches to deploy
   - **Selected branches**: Allows only specific branches to deploy

2. If you selected "Selected branches", click **Add branch** and type `main` to add it to the allowed branches.

![Configure Branch Protection](https://raw.githubusercontent.com/thrivingmindfulways/web-fortuners/main/public/images/github-branch-protection.png)

## Step 5: Save Changes

Click **Save protection rules** to apply the changes.

## Step 6: Verify Workflow Deployment

After configuring the environment protection rules, your GitHub Actions workflow should now be able to deploy to GitHub Pages successfully. You can check the status of your workflow runs in the "Actions" tab of your repository.

![GitHub Actions Tab](https://raw.githubusercontent.com/thrivingmindfulways/web-fortuners/main/public/images/github-actions-tab.png)

## Troubleshooting

If you're still experiencing issues with deployment after configuring the environment protection rules, check the following:

1. Ensure your GitHub Actions workflow file is correctly configured with the `environment` section:

```yaml
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Verify that the repository has GitHub Pages enabled:
   - Go to Settings > Pages
   - Ensure the Source is set to "GitHub Actions"

3. Check that your GitHub Actions workflow has the correct permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

For more detailed information, refer to the [GitHub documentation on managing environments for deployment](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment).