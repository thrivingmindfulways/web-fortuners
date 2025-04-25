# Deployment Instructions

This document provides step-by-step instructions for deploying the Web Fortuners website to GitHub Pages.

## Prerequisites

- GitHub account with access to the repository
- Git installed on your local machine
- Node.js (version 18 or higher) and npm installed

## Deployment Steps

### 1. Clone the Repository

```bash
git clone https://github.com/thrivingmindfulways/web-fortuners.git
cd web-fortuners
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Website

The website is configured to produce a static export suitable for GitHub Pages:

```bash
npm run build
```

This command will create a static export in the `out` directory.

### 4. Deploy to GitHub Pages

#### Option 1: Manual Deployment

1. Push the contents of the `out` directory to the `gh-pages` branch:

```bash
# Install gh-pages package if not already installed
npm install -g gh-pages

# Deploy the out directory to gh-pages branch
gh-pages -d out
```

2. Go to your GitHub repository settings and ensure GitHub Pages is set up to use the `gh-pages` branch.

#### Option 2: GitHub Actions Workflow

1. Create a `.github/workflows` directory in your repository:

```bash
mkdir -p .github/workflows
```

2. Create a deployment workflow file:

```bash
touch .github/workflows/deploy.yml
```

3. Add the following content to the workflow file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
          clean: true
```

4. Commit and push the workflow file:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

5. Go to your GitHub repository settings and ensure GitHub Pages is set up to use the `gh-pages` branch.

### 5. Configure Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your repository settings on GitHub
2. Navigate to the "Pages" section
3. Enter your custom domain in the "Custom domain" field
4. Add a CNAME file to your repository with your domain name:

```bash
echo "www.yourdomainname.com" > public/CNAME
```

5. Rebuild and redeploy the website

### 6. Verify Deployment

- Visit the GitHub Pages URL for your repository: `https://thrivingmindfulways.github.io/web-fortuners/`
- Check that all pages and assets are loading correctly
- Test the website on multiple devices and browsers
- Verify that forms and interactive elements are working as expected

## Troubleshooting

### Missing Assets

If assets (images, CSS, JavaScript) are not loading:

1. Check that the `basePath` in `next.config.mjs` is correctly set to `/web-fortuners` for production
2. Ensure all asset paths in the code are relative
3. Verify that the `next.config.mjs` has the correct export configuration

### 404 Errors on Routes

If routes other than the homepage return 404 errors:

1. Ensure that your `next.config.mjs` includes the `trailingSlash: true` option
2. Check if a custom 404 page is correctly configured
3. Verify that GitHub Pages is properly configured

### Build Errors

If the build fails:

1. Check your Node.js version (should be 18+)
2. Ensure all dependencies are installed
3. Look for syntax errors or missing imports in the code
4. Check the console for specific error messages

## Maintenance

For ongoing maintenance of the deployed website:

1. Make changes to the source code in your development environment
2. Test the changes locally using `npm run dev`
3. Build and verify the output using `npm run build` and `npm run start`
4. Commit and push changes to trigger automatic deployment (if using GitHub Actions)
5. Manually deploy if necessary using the steps described above

## Support

If you encounter issues with deployment, contact the development team or refer to:

- [Next.js Static Exports Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)