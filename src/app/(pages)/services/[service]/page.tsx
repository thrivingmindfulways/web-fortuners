import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { notFound } from 'next/navigation'

// Define service data
const serviceData = {
  'mobile-app-development': {
    title: 'Mobile App Development',
    description: 'We create exceptional mobile applications that engage users and drive business growth.',
    longDescription: 'Our mobile app development team creates cutting-edge applications that deliver exceptional user experiences across iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we have the expertise to bring your vision to life.',
    technologies: ['Flutter', 'React Native', 'iOS (Swift)', 'Android (Kotlin)', 'Hybrid Apps'],
    benefits: [
      'Intuitive user interfaces that engage and delight users',
      'Seamless performance across different devices and screen sizes',
      'Integration with device features like camera, GPS, and biometric authentication',
      'Robust backend services for data synchronization and storage',
      'Regular updates and maintenance to ensure continued functionality',
    ],
    processSteps: [
      { title: 'Discovery', description: 'We analyze your requirements, target audience, and business goals to define the scope of your mobile app.' },
      { title: 'UI/UX Design', description: 'Our designers create wireframes and prototypes to visualize the app before development begins.' },
      { title: 'Development', description: 'Our expert developers build the application using the most appropriate technologies and frameworks.' },
      { title: 'Testing', description: 'We rigorously test the app across different devices to ensure quality and performance.' },
      { title: 'Deployment', description: 'We handle the submission process to the App Store and Google Play Store.' },
      { title: 'Maintenance', description: 'We provide ongoing support and updates to keep your app running smoothly.' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <rect width="7" height="12" x="8.5" y="2" rx="1" />
        <path d="M12 6h.01" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M12 22v-6" />
        <path d="M12 17h-5a1 1 0 0 1-1-1v-4" />
        <path d="M17 17a3 3 0 1 0 0-6h-3v2" />
      </svg>
    ),
  },
  'web-development': {
    title: 'Web Development',
    description: 'We build responsive, performant websites and web applications that deliver exceptional user experiences.',
    longDescription: 'Our web development team creates modern, responsive websites and web applications that not only look great but also perform exceptionally well. Using the latest technologies and frameworks, we deliver solutions that are fast, secure, and scalable.',
    technologies: ['PHP', '.Net', 'CodeIgniter', 'Laravel', 'WordPress', 'Node.JS', 'Angular', 'ReactJS', 'Next.js'],
    benefits: [
      'Responsive designs that work seamlessly across all devices',
      'Fast-loading pages that improve user experience and SEO',
      'Secure implementation protecting your data and users',
      'Content management systems for easy updates',
      'Scalable architecture that grows with your business',
    ],
    processSteps: [
      { title: 'Planning', description: 'We define project requirements, goals, and technical specifications.' },
      { title: 'Design', description: 'Our designers create wireframes and visual designs for your website.' },
      { title: 'Development', description: 'Our developers build the frontend and backend components of your website.' },
      { title: 'Testing', description: 'We perform thorough testing for functionality, compatibility, and performance.' },
      { title: 'Deployment', description: 'We launch your website and ensure everything runs smoothly.' },
      { title: 'Support', description: 'We provide ongoing maintenance and support for your website.' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    ),
  },
  'ecommerce-development': {
    title: 'Ecommerce Development',
    description: 'We create powerful online stores that drive sales and provide seamless shopping experiences.',
    longDescription: 'Our ecommerce development services help businesses sell products and services online effectively. We create custom online stores that are user-friendly, secure, and optimized for conversions.',
    technologies: ['Shopify', 'WooCommerce', 'Magento'],
    benefits: [
      'User-friendly shopping experiences that drive conversions',
      'Secure payment gateway integrations',
      'Inventory management systems',
      'Mobile-responsive design for shopping on any device',
      'SEO optimization to improve visibility in search results',
    ],
    processSteps: [
      { title: 'Analysis', description: 'We analyze your business model, products, and target audience.' },
      { title: 'Design', description: 'Our designers create an attractive and conversion-optimized store design.' },
      { title: 'Development', description: 'We build your store with all necessary features and integrations.' },
      { title: 'Testing', description: 'We test every aspect of your store, including checkout and payment processing.' },
      { title: 'Launch', description: 'We deploy your store and ensure everything is working correctly.' },
      { title: 'Growth', description: 'We provide ongoing support and optimization for continued growth.' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  'api-integration': {
    title: 'API Integration',
    description: 'We connect your applications with third-party services through seamless API integrations.',
    longDescription: 'Our API integration services help businesses connect their applications with third-party services, enabling seamless data flow and expanded functionality. We handle the complexity of API integration so you can focus on your core business.',
    technologies: ['Branch iO', 'Socket iO', 'Mailchimp', 'SurveyMonkey', 'SendGrid', 'ID Merit', 'Firebase', 'Social Media', 'Payment Gateway', 'Google'],
    benefits: [
      'Automated data synchronization between systems',
      'Enhanced functionality through third-party services',
      'Improved efficiency through streamlined workflows',
      'Custom integration solutions tailored to your needs',
      'Reliable data flow with error handling and monitoring',
    ],
    processSteps: [
      { title: 'Assessment', description: 'We evaluate your integration needs and identify the best approach.' },
      { title: 'Planning', description: 'We create a detailed integration plan with endpoint mapping.' },
      { title: 'Development', description: 'We build the necessary connectors and implement the integration.' },
      { title: 'Testing', description: 'We thoroughly test the integration for reliability and data accuracy.' },
      { title: 'Deployment', description: 'We deploy the integration and ensure everything works as expected.' },
      { title: 'Monitoring', description: 'We set up monitoring to ensure the ongoing stability of the integration.' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <path d="M4 11h16" />
        <path d="M15 7h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4" />
        <path d="M9 17h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9" />
        <path d="M5 15h3" />
        <path d="M5 9h3" />
      </svg>
    ),
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    description: 'We provide scalable, secure cloud infrastructure and solutions for your business needs.',
    longDescription: 'Our cloud solutions help businesses leverage the power of cloud computing for increased scalability, reliability, and cost-efficiency. We design and implement cloud architectures tailored to your specific needs.',
    technologies: ['SaaS', 'Backup/Recovery', 'DBMS', 'Environments', 'CDNs', 'IaaS', 'Integration'],
    benefits: [
      'Scalable infrastructure that grows with your business',
      'Enhanced security with best practices and compliance',
      'Cost optimization through efficient resource utilization',
      'Improved reliability with redundant systems',
      'Simplified management and maintenance',
    ],
    processSteps: [
      { title: 'Assessment', description: 'We evaluate your current infrastructure and cloud readiness.' },
      { title: 'Strategy', description: 'We develop a cloud strategy aligned with your business goals.' },
      { title: 'Architecture', description: 'We design a cloud architecture tailored to your needs.' },
      { title: 'Migration', description: 'We migrate your applications and data to the cloud.' },
      { title: 'Optimization', description: 'We optimize your cloud resources for performance and cost.' },
      { title: 'Management', description: 'We provide ongoing cloud management and support.' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  'ai-ml-development': {
    title: 'AI/ML Development',
    description: 'We develop AI and machine learning solutions that provide intelligent insights and automation.',
    longDescription: 'Our AI/ML development services help businesses leverage the power of artificial intelligence and machine learning to gain valuable insights, automate processes, and create innovative solutions.',
    technologies: ['LLM Development', 'Chatbot Development', 'Predictive Analytics', 'Text-to-Speech', 'AI/ML Consulting'],
    benefits: [
      'Automation of repetitive tasks to improve efficiency',
      'Data-driven insights for better business decisions',
      'Personalized user experiences through AI',
      'Predictive analytics for anticipating trends and behaviors',
      'Intelligent solutions that learn and improve over time',
    ],
    processSteps: [
      { title: 'Discovery', description: 'We identify opportunities for AI/ML in your business.' },
      { title: 'Data Analysis', description: 'We analyze your data to determine feasibility and approach.' },
      { title: 'Model Development', description: 'We develop and train AI/ML models with your data.' },
      { title: 'Integration', description: 'We integrate the models into your existing systems.' },
      { title: 'Testing', description: 'We validate the models with real-world data and scenarios.' },
      { title: 'Deployment', description: 'We deploy the solution and provide ongoing monitoring.' },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 text-primary"
      >
        <path d="M12 2a8 8 0 0 0-8 8v12h16V10a8 8 0 0 0-8-8Z" />
        <path d="M8 12v4" />
        <path d="M12 12v4" />
        <path d="M16 12v4" />
      </svg>
    ),
  },
}

// Add generateStaticParams function for static export
export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service: service,
  }))
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const { service } = params
  
  // Check if the service exists in our data
  if (!serviceData[service as keyof typeof serviceData]) {
    notFound()
  }
  
  const data = serviceData[service as keyof typeof serviceData]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto mb-6 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              {data.icon}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-neutral-200 mb-8">
              {data.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-8">
                {data.longDescription}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Technologies & Platforms:</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {data.technologies.map((tech, i) => (
                  <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground">
              We follow a systematic approach to deliver high-quality solutions that meet your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.processSteps.map((step, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your {data.title.toLowerCase()} needs and discover how we can help you achieve your goals.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}