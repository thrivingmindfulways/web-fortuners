'use client'

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Terms of Service
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
                These Terms of Service ("Terms") govern your use of the website located at webfortuners.com ("Website") and any related services provided by Web Fortuners ("We," "Us," or "Our").
              </p>
              
              <p>
                By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Website.
              </p>
              
              <h2>1. Services</h2>
              <p>
                Web Fortuners provides digital agency services including but not limited to mobile app development, web development, ecommerce development, API integration, cloud solutions, and AI/ML development ("Services"). By engaging our Services, you agree to provide accurate and complete information as required for the delivery of the Services.
              </p>
              
              <h2>2. Intellectual Property</h2>
              <p>
                The Website and its original content, features, and functionality are owned by Web Fortuners and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Website.
              </p>
              <p>
                You are responsible for safeguarding the password you use to access the Website and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              
              <h2>4. Links To Other Web Sites</h2>
              <p>
                Our Website may contain links to third-party websites or services that are not owned or controlled by Web Fortuners.
              </p>
              <p>
                Web Fortuners has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Web Fortuners shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              
              <h2>5. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Website will immediately cease. If you wish to terminate your account, you may simply discontinue using the Website.
              </p>
              
              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall Web Fortuners, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Website; (ii) any conduct or content of any third party on the Website; (iii) any content obtained from the Website; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
              
              <h2>7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2>8. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
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