import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | RIMs Software Company",
  description: "Privacy policy and data protection practices at RIMs Software Company.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600 leading-relaxed">
          <p className="text-sm text-gray-400">Last Updated: May 11, 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">1. Introduction</h2>
            <p>
              At RIMs Software Company (Rohan Info Mediaa Softwares), we are committed to protecting the privacy and security of your data. This Privacy Policy explains how we collect, use, and safeguard information when you use our ERP solutions and services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">2. Information Collection</h2>
            <p>
              We collect information that you provide directly to us when implementing our software, such as contact details, cooperative society information, and administrative data. Our ERP systems process operational data related to milk collection, payments, and inventory as part of the service provided to your society.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">3. Use of Information</h2>
            <p>
              The data processed through our systems is used exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our ERP services</li>
              <li>Process transactions and generate reports for cooperative societies</li>
              <li>Provide technical support and troubleshooting</li>
              <li>Improve our software features and user experience</li>
              <li>Communicate important service updates and security alerts</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">4. Data Security</h2>
            <p>
              We implement robust technical and organizational measures to protect your data against unauthorized access, loss, or alteration. Our systems use industry-standard encryption and secure database management practices to ensure the integrity of your operational records.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">5. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal or operational data with third parties. Data is only shared when necessary to comply with legal obligations or when authorized by the respective cooperative society (e.g., for government audit purposes).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">6. Your Rights</h2>
            <p>
              As a user of our services, you have the right to access, correct, or request the deletion of your personal data. Cooperative societies maintain ownership of their operational data and can export it from our systems at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-primary">7. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-22xl font-heading font-semibold text-primary">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer at:<br />
              <strong>Email:</strong> privacy@rimssoftware.com<br />
              <strong>Address:</strong> 123 ERP Tower, IT Park, Coimbatore, Tamil Nadu 641014
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
