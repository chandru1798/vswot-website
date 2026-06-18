import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Terms & Conditions | Vswot Digital Marketing Agency',
  description: 'Vswot\'s Terms and Conditions governing use of our website and digital marketing services.',
  path: '/terms-conditions',
});

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-xl max-w-3xl">
        <Breadcrumb items={[{ label: 'Terms & Conditions' }]} className="mb-8" />
        <h1 className="text-4xl font-display font-bold text-white mb-4">Terms & Conditions</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: 1 January 2025</p>

        <div className="space-y-10">
          {[
            {
              title: '1. Acceptance of Terms',
              content: `By accessing and using vswot.com and our services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website and services.`,
            },
            {
              title: '2. Services',
              content: `Vswot provides digital marketing services including, but not limited to: website development, search engine optimisation (SEO), pay-per-click advertising, social media marketing, content marketing, graphic design, and video production. Specific services, deliverables, timelines, and fees are outlined in individual service agreements or proposals agreed between Vswot and the client.`,
            },
            {
              title: '3. Intellectual Property',
              content: `All content on this website — including text, graphics, logos, images, and software — is the property of Vswot and protected by applicable intellectual property laws.

Upon full payment for project-based services, clients receive ownership of final deliverables as specified in their service agreement. Vswot retains the right to display completed work in its portfolio unless otherwise agreed in writing. Third-party assets (stock photos, fonts, plugins) remain subject to their respective licences.`,
            },
            {
              title: '4. Client Responsibilities',
              content: `Clients agree to:

• Provide accurate, complete, and timely information required for service delivery
• Grant Vswot necessary access to accounts, platforms, and assets as required
• Review and approve deliverables in a timely manner within agreed timeframes
• Ensure all content provided does not infringe third-party intellectual property rights`,
            },
            {
              title: '5. Payment Terms',
              content: `Payment terms are specified in individual service agreements. Standard terms include a deposit (typically 50%) before project commencement and balance upon completion. Retainer services are billed monthly in advance. Overdue invoices may attract interest and may result in suspension of services. Vswot reserves the right to withhold delivery of final files until payment is received in full.`,
            },
            {
              title: '6. Confidentiality',
              content: `Both parties agree to keep confidential any proprietary or sensitive information disclosed during the engagement. This includes business strategies, pricing, client lists, and technical information. This obligation survives termination of the agreement.`,
            },
            {
              title: '7. Limitation of Liability',
              content: `To the fullest extent permitted by law, Vswot shall not be liable for indirect, incidental, special, or consequential damages arising from use of our services or this website. Our total liability for any claim shall not exceed the fees paid by the client in the 3 months preceding the claim.

Vswot does not guarantee specific results from digital marketing campaigns, as outcomes depend on factors including market conditions, competition, and client responsiveness.`,
            },
            {
              title: '8. Termination',
              content: `Either party may terminate a service agreement with 30 days written notice. Upon termination, the client is responsible for fees for services rendered up to the termination date. Vswot will return all client-owned assets and data within 14 days of termination.`,
            },
            {
              title: '9. Governing Law',
              content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City], India.`,
            },
            {
              title: '10. Changes to Terms',
              content: `Vswot reserves the right to modify these Terms at any time. Changes take effect upon posting to this page. Continued use of our services following changes constitutes acceptance of the revised terms.`,
            },
            {
              title: '11. Contact',
              content: `For questions about these Terms and Conditions, please contact us at: legal@vswot.com`,
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
              <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
