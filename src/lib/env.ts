// Safe environment variable handling for both server and client components
// This prevents "process is not defined" errors

// Define the shape of our public environment variables
type EnvVariables = {
  NEXT_PUBLIC_BASE_PATH: string;
  NEXT_PUBLIC_SITE_URL: string;
};

// Define a variable with default values
export const env: EnvVariables = {
  NEXT_PUBLIC_BASE_PATH: '/web-fortuners',
  NEXT_PUBLIC_SITE_URL: 'https://thrivingmindfulways.github.io',
};

// Only run this logic on the server side (if process is defined)
if (typeof process !== 'undefined' && process.env) {
  // TypeScript won't allow us to dynamically access process.env with our keys
  // so we have to do it manually for each key
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    env.NEXT_PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    env.NEXT_PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  }
}

// Export a utility function to get the base URL
export function getBaseUrl(): string {
  // In a real browser
  if (typeof window !== 'undefined') {
    // For GitHub Pages deployment 
    if (window.location.hostname === 'thrivingmindfulways.github.io') {
      return 'https://thrivingmindfulways.github.io/web-fortuners';
    }
    // For local development
    return window.location.origin;
  }
  
  // When pre-rendering
  return `${env.NEXT_PUBLIC_SITE_URL}${env.NEXT_PUBLIC_BASE_PATH}`;
}