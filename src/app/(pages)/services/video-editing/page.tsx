import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Video Editing Services | Professional Video Production & Post-Production',
  description: 'Professional video editing services — social media Reels, YouTube content, brand films, explainer videos, and ad creatives. Fast turnaround, cinematic quality.',
  path: '/services/video-editing',
});

const services = [
  { icon: '📱', title: 'Short-Form Reels & TikToks', desc: 'Vertical video editing for Instagram Reels, TikTok, and YouTube Shorts — hooks, captions, trending sounds, and platform-native cuts.' },
  { icon: '▶️', title: 'YouTube Video Editing', desc: 'Long-form YouTube content editing with intro/outro, motion graphics, colour grading, and chapters for maximum retention.' },
  { icon: '🎬', title: 'Brand Films & Promos', desc: 'Cinematic brand videos and product showcase films that tell your story with premium production quality.' },
  { icon: '🎞️', title: 'Explainer Videos', desc: 'Animated and live-action explainer videos that simplify complex products or services and drive conversions.' },
  { icon: '📺', title: 'Ad Creatives', desc: 'High-converting video ads for Meta, Google, and YouTube — formatted for every placement with strong hooks and clear CTAs.' },
  { icon: '🎤', title: 'Podcast & Webinar Editing', desc: 'Multi-camera podcast editing, webinar post-production, audiogram creation, and social clips for video podcasts.' },
];

const faqs = [
  { question: 'What is your turnaround time for video editing?', answer: 'Standard turnaround is 3–5 business days per video. Rush orders (24–48 hours) are available. Short-form Reels are typically delivered within 2–3 business days.' },
  { question: 'What footage formats do you accept?', answer: 'We accept all major formats — MP4, MOV, MXF, R3D, BRAW — from any camera. Raw footage should be shared via Google Drive, WeTransfer, or Frame.io.' },
  { question: 'Do you provide subtitles and captions?', answer: 'Yes — all social video packages include auto-generated subtitles with manual review and styling to match your brand. We support English, Hindi, and Tamil captions.' },
  { question: 'Can you add motion graphics and animations?', answer: 'Yes. Our team handles lower thirds, animated titles, kinetic typography, logo animations, and infographic overlays using After Effects and Premiere Pro.' },
  { question: 'How many revisions are included?', answer: 'All packages include 2 revision rounds. Additional revisions are available at a per-round rate. We share a feedback form to make revision notes clear and efficient.' },
];

export default function VideoEditingPage() {
  const jsonLd = [
    serviceSchema({ name: 'Video Editing', description: 'Professional video editing services for social media, YouTube, brand films, and ad creatives.', url: 'https://vswot.com/services/video-editing' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'Video Editing', url: 'https://vswot.com/services/video-editing' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Video Editing' }]} className="mb-8" />
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">Video Editing</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Video That{' '}
              <span className="gradient-text">Stops the Scroll</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              From 30-second Reels to cinematic brand films — we edit video content that captures attention, communicates your message, and drives action across every platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start a Video Project →</Link>
              <Link href="/portfolio" className="btn-secondary">View Our Work</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {[['1000+', 'Videos Edited'], ['3 Days', 'Avg. Turnaround'], ['4K', 'Export Quality'], ['4.9★', 'Client Rating']].map(([num, label]) => (
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
            <span className="eyebrow mb-4 inline-block">Services</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Every Video Format, Mastered</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-base p-7 group hover:border-red-500/40 transition-all">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-1/30">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-4 inline-block">Tools We Use</span>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Industry-Standard Editing Suite</h2>
              <p className="text-white/60 leading-relaxed mb-8">Our editors are proficient in the full Adobe Creative Cloud and DaVinci Resolve ecosystem — ensuring professional output regardless of your footage source or deliverable format.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Adobe Audition', 'Photoshop', 'Frame.io'].map((tool) => (
                  <div key={tool} className="card-base p-4 text-sm text-white/70 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-base p-8">
              <h3 className="text-xl font-semibold text-white mb-6">How to Get Started</h3>
              <div className="space-y-5">
                {[
                  ['1', 'Submit your brief via our contact form, including footage and reference links'],
                  ['2', 'We confirm scope, turnaround, and send an invoice within 24 hours'],
                  ['3', 'Upload your raw footage via Google Drive or Frame.io'],
                  ['4', 'Receive your first edit — give feedback via timestamp comments'],
                  ['5', 'Final delivery in all required formats and resolutions'],
                ].map(([num, text]) => (
                  <div key={num} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{num}</span>
                    <p className="text-white/60 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Create Scroll-Stopping Video?</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Send us your footage or brief and get a quote within 24 hours.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Start Your Video Project →</Link>
        </div>
      </section>
    </>
  );
}
