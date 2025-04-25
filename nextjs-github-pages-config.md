# Next.js Configuration for GitHub Pages

This document explains how to properly configure a Next.js application for GitHub Pages deployment to fix the blank/white screen issue.

## Issues with GitHub Pages and Next.js

GitHub Pages hosts sites on a subdirectory path (e.g., `username.github.io/repository-name`), but Next.js by default expects to be at the root of a domain. This mismatch can cause:

1. Blank screens with no visible errors
2. Missing JavaScript and CSS files
3. Incorrect routing

## Solution: Proper Configuration

### 1. Update next.config.mjs

Update your `next.config.mjs` with both `basePath` and `assetPrefix`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static HTML export
  images: {
    unoptimized: true,  // Required for static export
  },
  
  // These are critical for GitHub Pages
  basePath: '/web-fortuners',  // Your repo name
  assetPrefix: '/web-fortuners/',  // Your repo name with trailing slash
  
  // This helps with routing
  trailingSlash: true,
};

export default nextConfig;
```

The `basePath` setting tells Next.js that all routes should be prefixed with `/web-fortuners`. The `assetPrefix` ensures all static assets (JavaScript, CSS, images) are loaded from the correct path.

### 2. Add Custom Document for GitHub Pages

Create a custom `_document.js` file in the `pages` directory (if using Pages Router) or use the existing layout file (if using App Router) to add a script that handles GitHub Pages SPA redirects:

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* GitHub Pages SPA Redirect */}
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var redirect = sessionStorage.redirect;
                delete sessionStorage.redirect;
                if (redirect && redirect !== location.href) {
                  history.replaceState(null, null, redirect);
                }
              })();
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### 3. Create 404.html with Redirect Script

Create a `public/404.html` file with a script to handle client-side routing:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
      location.href = '/web-fortuners/';
    </script>
  </head>
  <body>
    <h1>Redirecting...</h1>
    <p>If you are not redirected automatically, click <a href="/web-fortuners/">here</a>.</p>
  </body>
</html>
```

### 4. Add .nojekyll File

Create an empty `.nojekyll` file in the `public` directory to prevent GitHub Pages from processing the site with Jekyll:

```bash
touch public/.nojekyll
```

### 5. Update Link Components

If you're using Next.js `Link` components, they'll automatically use the `basePath`. However, for external links or hardcoded URLs, make sure to add the base path:

```jsx
// This works automatically with basePath:
<Link href="/about">About</Link>

// For hardcoded URLs or asset paths, use a utility function:
const getBasePath = () => {
  return '/web-fortuners';
};

<a href={`${getBasePath()}/some-page`}>Some Page</a>
```

## Testing Your Configuration

Before deploying to GitHub Pages, test your export locally:

```bash
npm run build
npx serve -s out
```

This will create a static build and serve it, allowing you to test your configuration locally before deployment.

## References

- [Next.js Official Documentation: basePath](https://nextjs.org/docs/app/api-reference/config/basePath)
- [Next.js Official Documentation: assetPrefix](https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix)
- [Next.js Official Documentation: Static HTML Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)