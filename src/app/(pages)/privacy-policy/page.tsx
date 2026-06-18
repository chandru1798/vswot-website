import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy | Vswot Digital Marketing Agency',
  description: 'Vswot\'s Privacy Policy — how we collect, use, and protect your personal information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-xl max-w-3xl">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} className="mb-8" />
        <h1 className="text-4xl font-display font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: 1 January 2025</p>

        <div className="prose-legal space-y-10">
          {[
            {
              title: '1. Introduction',
              content: `Vswot ("we", "our", or "us") operates the website vswot.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.`,
            },
            {
              title: '2. Information We Collect',
              content: `We may collect the following types of information:

Personal Identification Information: Name, email address, phone number, and company name when you fill out contact forms, subscribe to our newsletter, or request a consultation.

Usage Data: IP address, browser type, pages visited, time spent on pages, and referring URLs — collected automatically via analytics tools (Google Analytics).

Cookies: We use essential cookies for site functionality and analytics cookies to understand how visitors use our site. You can control cookie preferences via your browser settings.`,
            },
            {
              title: '3. How We Use Your Information',
              content: `We use the information we collect to:

• Respond to enquiries and provide requested services
• Send newsletters and marketing communications (only with your consent)
• Improve our website and services
• Comply with legal obligations
• Prevent fraudulent or unauthorised use of our services`,
            },
            {
              title: '4. Data Sharing and Disclosure',
              content: `We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and conducting our business (e.g., email service providers, CRM software), subject to confidentiality agreements.

We may disclose your information when required by law or to protect our rights, property, or the safety of our users.`,
            },
            {
              title: '5. Data Retention',
              content: `We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Contact form submissions are retained for up to 3 years. Newsletter subscribers\' data is retained until unsubscription.`,
            },
            {
              title: '6. Your Rights',
              content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• Right to access — request a copy of the data we hold about you
• Right to rectification — request correction of inaccurate data
• Right to erasure — request deletion of your data
• Right to object — object to certain uses of your data
• Right to data portability — receive your data in a portable format

To exercise any of these rights, please contact us at privacy@vswot.com.`,
            },
            {
              title: '7. Security',
              content: `We implement appropriate technical and organisational security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.`,
            },
            {
              title: '8. Third-Party Links',
              content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
            },
            {
              title: '9. Children\'s Privacy',
              content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.`,
            },
            {
              title: '10. Changes to This Policy',
              content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated "Last updated" date. Continued use of our site after changes constitutes acceptance of the revised policy.`,
            },
            {
              title: '11. Contact Us',
              content: `If you have questions about this Privacy Policy or our data practices, please contact us:

Email: privacy@vswot.com
Address: Vswot Digital Marketing Agency, [Your Address]`,
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
              <div className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
