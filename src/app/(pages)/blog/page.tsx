import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { client, allBlogPostsQuery } from '@/lib/sanity';
import type { BlogPost } from '@/types';

export const metadata: Metadata = createMetadata({
  title: 'Digital Marketing Blog | Insights, Strategies & Growth Tips',
  description: 'Expert digital marketing insights from the Vswot team — SEO strategies, paid ads tips, social media tactics, and web development best practices.',
  path: '/blog',
});

// Fallback placeholder posts for pre-Sanity state
const placeholderPosts: Partial<BlogPost>[] = [
  {
    _id: '1',
    title: '10 Technical SEO Fixes That Doubled Our Client\'s Organic Traffic',
    slug: { current: 'technical-seo-fixes-doubled-traffic' },
    excerpt: 'A step-by-step walkthrough of the ten highest-impact technical SEO improvements we implement for every new client — and the results they generate.',
    publishedAt: '2025-06-10',
    readingTime: 8,
    categories: ['SEO', 'Technical'],
  },
  {
    _id: '2',
    title: 'Google AI Overviews: How to Get Your Brand Featured in 2025',
    slug: { current: 'google-ai-overviews-brand-featured' },
    excerpt: 'AI Overviews are changing how brands get discovered. Here\'s exactly how we optimise content to earn inclusion in Google\'s generative search results.',
    publishedAt: '2025-06-03',
    readingTime: 10,
    categories: ['GEO/AEO', 'SEO'],
  },
  {
    _id: '3',
    title: 'Meta Ads in 2025: The Complete Performance Marketing Playbook',
    slug: { current: 'meta-ads-2025-performance-marketing-playbook' },
    excerpt: 'From campaign structure to creative testing and budget scaling — our proven Meta Ads framework for consistently hitting 4x+ ROAS.',
    publishedAt: '2025-05-27',
    readingTime: 15,
    categories: ['Paid Ads', 'Meta'],
  },
  {
    _id: '4',
    title: 'Why Your Website Is Losing Leads (And How to Fix It in a Week)',
    slug: { current: 'website-losing-leads-fixes' },
    excerpt: 'The seven conversion rate killers we find on almost every website we audit — and the specific changes that typically double enquiry rates within 30 days.',
    publishedAt: '2025-05-19',
    readingTime: 7,
    categories: ['CRO', 'Web Design'],
  },
  {
    _id: '5',
    title: 'Local SEO in 2025: The Complete Guide for Indian Businesses',
    slug: { current: 'local-seo-2025-india-guide' },
    excerpt: 'Google Business Profile optimisation, citation building, and local content strategy tailored for the Indian market — with specific tips for Tier 1 and Tier 2 cities.',
    publishedAt: '2025-05-12',
    readingTime: 12,
    categories: ['Local SEO'],
  },
  {
    _id: '6',
    title: 'Content Marketing ROI: How to Calculate and Improve It',
    slug: { current: 'content-marketing-roi-calculate-improve' },
    excerpt: 'Stop flying blind on content performance. Here\'s the exact framework we use to track content ROI from first click to closed deal.',
    publishedAt: '2025-05-05',
    readingTime: 9,
    categories: ['Content Marketing'],
  },
];

async function getBlogPosts(): Promise<Partial<BlogPost>[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(allBlogPostsQuery);
    return posts?.length > 0 ? posts : placeholderPosts;
  } catch {
    return placeholderPosts;
  }
}

const categories = ['All', 'SEO', 'Paid Ads', 'Social Media', 'Web Dev', 'Content', 'CRO'];

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  const jsonLd = breadcrumbSchema([{ name: 'Blog', url: 'https://vswot.com/blog' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Blog' }]} className="mb-8" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow mb-4 inline-block">Blog</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                Marketing Insights &{' '}
                <span className="gradient-text">Growth Strategies</span>
              </h1>
            </div>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed">
              Practical strategies from the Vswot team — no fluff, no vague advice. Just proven tactics you can implement today.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  i === 0
                    ? 'bg-brand text-white border-brand'
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-xl">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug?.current || '#'}`}
              className="card-base p-8 md:p-10 flex flex-col md:flex-row gap-8 mb-12 group hover:border-brand/40 transition-all bg-gradient-to-br from-brand/5 to-fuchsia-500/5"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-brand uppercase tracking-widest">Featured</span>
                  {featured.categories?.[0] && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                      {featured.categories[0]}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-brand/90 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-white/40">
                  {featured.publishedAt && <span>{new Date(featured.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>}
                  {featured.readingTime && <span>{featured.readingTime} min read</span>}
                </div>
              </div>
              <div className="md:w-64 lg:w-72 aspect-video md:aspect-square rounded-xl bg-gradient-to-br from-brand/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-6xl">📈</span>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current || '#'}`}
                className="card-base p-6 flex flex-col group hover:border-brand/40 transition-all"
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/5 flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-4xl">✍️</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories?.map((cat) => (
                    <span key={cat} className="text-xs px-2 py-0.5 rounded-full bg-brand/10 border border-brand/20 text-brand">
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-base font-semibold text-white mb-3 leading-snug group-hover:text-brand/90 transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-white/35 mt-auto pt-4 border-t border-white/5">
                  {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>}
                  {post.readingTime && <span>{post.readingTime} min read</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-surface-1/30">
        <div className="container-xl max-w-2xl text-center">
          <span className="eyebrow mb-4 inline-block">Newsletter</span>
          <h2 className="text-4xl font-display font-bold text-white mb-4">Get Weekly Marketing Insights</h2>
          <p className="text-white/50 mb-8">No spam. Just one actionable marketing insight every week, delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Subscribe →</button>
          </form>
          <p className="text-white/30 text-xs mt-4">Join 2,400+ marketers. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
