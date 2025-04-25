'use client'

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-neutral-200">
              Last updated: April 24, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-neutral max-w-none">
              <p>
                At Web Fortuners, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect via the Website includes:
              </p>
              
              <h3>Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and other similar contact data that you voluntarily give to us when you register with the Website or when you choose to participate in various activities related to the Website, such as online chat and message boards.
              </p>
              
              <h3>Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Website.
              </p>
              
              <h3>Financial Data</h3>
              <p>
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Website.
              </p>
              
              <h2>Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
              </p>
              
              <ul>
                <li>Create and manage your account.</li>
                <li>Process your payments.</li>
                <li>Send you a newsletter.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Website.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Request feedback and contact you about your use of the Website.</li>
                <li>Protect Website or other company assets.</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              
              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              
              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
              
              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              
              <address>
                Web Fortuners<br />
                123 Tech Street, Suite 101<br />
                San Francisco, CA 94105<br />
                info@webfortuners.com<br />
                +1 (555) 123-4567
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}