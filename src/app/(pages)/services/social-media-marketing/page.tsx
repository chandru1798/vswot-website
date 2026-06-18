import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Social Media Marketing Services | Grow Your Brand on Social',
  description: 'Strategic social media marketing services across Instagram, LinkedIn, Facebook, and YouTube. Content creation, community management, and paid social that builds audiences and drives revenue.',
  path: '/services/social-media-marketing',
});

const platforms = [
  { name: 'Instagram', icon: '📸', desc: 'Reels, Stories, carousels and influencer collaborations that build community and drive DMs.' },
  { name: 'LinkedIn', icon: '💼', desc: 'Thought leadership content, B2B lead generation, and company page growth for professional brands.' },
  { name: 'Facebook', icon: '👥', desc: 'Page management, group community building, and organic reach strategies alongside paid campaigns.' },
  { name: 'YouTube', icon: '▶️', desc: 'Channel strategy, video SEO, thumbnail design, and content calendars for long-form video.' },
  { name: 'Twitter/X', icon: '🐦', desc: 'Real-time engagement, brand voice consistency, trending topic participation, and follower growth.' },
  { name: 'Pinterest', icon: '📌', desc: 'Visual content strategy, rich pins, and traffic-driving boards for lifestyle and e-commerce brands.' },
];

const services = [
  { icon: '📅', title: 'Content Calendar & Strategy', desc: 'Monthly content calendars aligned to your campaigns, product launches, and industry moments.' },
  { icon: '✍️', title: 'Content Creation', desc: 'Copywriting, graphic design, Reels scripting, and carousel creation — all in-house, all branded.' },
  { icon: '💬', title: 'Community Management', desc: 'Daily engagement, comment management, DM responses, and brand voice consistency across platforms.' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Monthly reports covering reach, engagement, follower growth, website traffic, and content ROI.' },
  { icon: '🤝', title: 'Influencer Marketing', desc: 'Micro and macro influencer identification, outreach, briefing, and campaign performance tracking.' },
  { icon: '🚀', title: 'Growth Strategies', desc: 'Algorithm-optimised posting schedules, hashtag research, collaboration strategies, and viral content frameworks.' },
];

const faqs = [
  { question: 'Which social platforms should my business be on?', answer: 'It depends on your audience. B2B: LinkedIn + Twitter. B2C products: Instagram + Facebook. Video-first brands: YouTube + Instagram Reels. We recommend starting with 2–3 platforms and expanding with results.' },
  { question: 'How much content do you post per week?', answer: 'Our standard packages include 5 posts per week across your primary platforms. Premium packages include daily posting with Stories/Reels. Volume is tailored to your audience and platform algorithms.' },
  { question: 'Do you create the actual content or just strategy?', answer: 'Both. Our in-house designers and copywriters create ready-to-post content — graphics, captions, hashtags, and video briefs. You approve before anything goes live.' },
  { question: 'How long before I see social media results?', answer: 'Community growth and engagement improvements typically show within 60 days. Significant follower growth and brand awareness shifts take 3–6 months of consistent execution.' },
  { question: 'Can you manage paid social ads too?', answer: 'Yes — our performance marketing team handles Meta Ads alongside organic social. Combining paid and organic delivers the best results for audience building and conversion.' },
];

export default function SocialMediaMarketingPage() {
  const jsonLd = [
    serviceSchema({ name: 'Social Media Marketing', description: 'Strategic social media marketing services for brand building, community growth, and lead generation.', url: 'https://vswot.com/services/social-media-marketing' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'Social Media Marketing', url: 'https://vswot.com/services/social-media-marketing' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Social Media Marketing' }]} className="mb-8" />
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">Social Media Marketing</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Build a Brand That{' '}
              <span className="gradient-text">People Talk About</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              Strategic social media marketing that builds loyal communities, drives brand awareness, and generates qualified leads. Content, community, and growth — all handled by our team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get Social Strategy →</Link>
              <Link href="/portfolio" className="btn-secondary">View Case Studies</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {[['150+', 'Brands Managed'], ['8.5%', 'Avg. Engagement Rate'], ['2.3M+', 'Followers Grown'], ['4.8★', 'Client Satisfaction']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{num}</div>
                <div className="text-sm text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Platforms</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">We Master Every Platform</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.name} className="card-base p-7 group hover:border-pink-500/40 transition-all">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{p.name}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-1/30">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Services</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Full-Service Social Media Management</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-base p-7 group hover:border-brand/40 transition-all">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">FAQs</span>
            <h2 className="text-4xl font-display font-bold text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-base p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Start Growing Your Social Presence</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Get a free social media audit with specific recommendations for your platforms.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free Social Audit →</Link>
        </div>
      </section>
    </>
  );
}
