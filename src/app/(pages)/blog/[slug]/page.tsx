import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { client, blogPostBySlugQuery } from '@/lib/sanity';
import { createMetadata, articleSchema, breadcrumbSchema } from '@/lib/seo';
import type { BlogPost } from '@/types';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch<BlogPost>(blogPostBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt || '',
    path: `/blog/${slug}`,
    image: post.seo?.image || post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  // Graceful handling — show a preview layout if Sanity not yet configured
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-3xl font-display font-bold text-white mb-4">Article Coming Soon</h1>
          <p className="text-white/50 mb-8">This post is being prepared. Check back shortly.</p>
          <Link href="/blog" className="btn-primary">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const jsonLd = [
    articleSchema(post),
    breadcrumbSchema([
      { name: 'Blog', url: 'https://vswot.com/blog' },
      { name: post.title, url: `https://vswot.com/blog/${slug}` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 mesh-bg" />
          <div className="container-xl relative z-10 max-w-4xl">
            <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} className="mb-8" />

            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories?.map((cat) => (
                <span key={cat} className="text-xs px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-medium">
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-white/60 leading-relaxed mb-8">{post.excerpt}</p>
            )}

            <div className="flex items-center gap-6 text-sm text-white/40 pb-8 border-b border-white/10">
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-xs text-brand font-bold">
                    {post.author.name?.[0]}
                  </div>
                  <span className="text-white/60">{post.author.name}</span>
                </div>
              )}
              {post.publishedAt && (
                <span>{new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              )}
              {post.readingTime && <span>{post.readingTime} min read</span>}
            </div>
          </div>
        </header>

        <div className="py-16">
          <div className="container-xl">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12 max-w-6xl">
              {/* Article body */}
              <div className="prose-article">
                {/* Portable text rendering — in production, install @portabletext/react */}
                {post.body ? (
                  <div className="space-y-6 text-white/70 leading-relaxed">
                    {/* @portabletext/react renders post.body in production */}
                    <p className="text-white/50 italic border border-dashed border-white/10 p-4 rounded-xl text-sm">
                      ℹ️ Install <code className="text-brand">@portabletext/react</code> and replace this block with{' '}
                      <code className="text-brand">{'<PortableText value={post.body} />'}</code> for full Sanity content rendering.
                    </p>
                  </div>
                ) : (
                  <p className="text-white/50">Article content managed via Sanity CMS.</p>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="card-base p-6 sticky top-28">
                  <h3 className="font-semibold text-white mb-4">Ready to Grow Your Business?</h3>
                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
                    Get a free strategy call with our team and discover what's possible for your business.
                  </p>
                  <Link href="/contact" className="btn-primary w-full text-center text-sm py-3">
                    Book Free Strategy Call →
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/5 text-center">
                    <span className="text-white/30 text-xs">No obligation. 30 minutes.</span>
                  </div>
                </div>

                {post.categories && (
                  <div className="card-base p-6">
                    <h3 className="font-semibold text-white mb-4 text-sm">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <Link key={cat} href={`/blog?category=${cat}`}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white/70 hover:border-white/20 transition-colors">
                          {cat}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>

        {/* Post footer CTA */}
        <section className="py-16 bg-surface-1/30">
          <div className="container-xl text-center max-w-2xl">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Found this useful?</h2>
            <p className="text-white/50 mb-8">See how Vswot applies these strategies for real clients — or get a free audit of your own digital presence.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/portfolio" className="btn-primary">View Case Studies</Link>
              <Link href="/contact" className="btn-secondary">Get Free Audit</Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
