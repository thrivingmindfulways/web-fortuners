# Web Fortuners Agency Website

A modern, responsive website for Web Fortuners digital agency showcasing their services and expertise.

## Features

- Modern UI design with responsive layouts
- Dark mode / light mode support
- Comprehensive service pages
- Contact form with validation
- Optimized for performance and SEO

## Technologies Used

- Next.js 15 (React framework)
- TypeScript
- Tailwind CSS (styling)
- Shadcn UI (component library)
- React Hook Form (form handling)
- Zod (validation)
- Next Themes (dark/light mode)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thrivingmindfulways/web-fortuners.git
   cd web-fortuners
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `/src/app`: Next.js app router pages and layouts
- `/src/components`: Reusable React components
  - `/ui`: UI components (buttons, forms, etc.)
  - `/layout`: Layout components (header, footer, etc.)
- `/public`: Static assets (images, etc.)

## Deployment

This website is configured for easy deployment to various platforms:

### GitHub Pages

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

#### Configuring GitHub Pages Environment Protection

If you encounter deployment issues with error "Branch is not allowed to deploy to github-pages due to environment protection rules", follow these steps:

1. Go to your repository Settings
2. Navigate to "Environments" in the left sidebar
3. Click on the "github-pages" environment
4. Under "Deployment branches and tags", add "main" as an allowed branch
5. Save the changes

For more detailed instructions, see [github-pages-deployment-guide.md](github-pages-deployment-guide.md).

## License

This project is proprietary and belongs to Web Fortuners agency.

## Contact

For any inquiries, please contact [info@webfortuners.com](mailto:info@webfortuners.com).