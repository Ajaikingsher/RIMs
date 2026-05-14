import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | RIMs Software Company",
  description: "Terms and conditions for using RIMs Software products and services.",
}

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p className="text-sm text-gray-400">Last Updated: May 11, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">1. Agreement to Terms</h2>
            <p>
              By accessing or using RIMs Software Company (Rohan Info Mediaa Softwares) services, including our ERP solutions for Dairy Cooperative Societies, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">2. Description of Service</h2>
            <p>
              RIMs provides specialized Enterprise Resource Planning (ERP) software, including the "Gramiya Paaledu" system, designed for Milk Cooperative Societies, BMC units, and related dairy industry operations. Our services include software licensing, implementation, support, and maintenance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">3. User Obligations</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. You agree to provide accurate, current, and complete information during the registration process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">4. Intellectual Property</h2>
            <p>
              All software, designs, text, graphics, and other content provided by RIMs are the intellectual property of Rohan Info Mediaa Softwares. No part of our software or website may be reproduced, distributed, or modified without explicit written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">5. Limitation of Liability</h2>
            <p>
              RIMs Software Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services, including data loss or business interruption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:<br />
              <strong>Email:</strong> legal@rimssoftware.com<br />
              <strong>Address:</strong> 123 ERP Tower, IT Park, Coimbatore, Tamil Nadu 641014
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
