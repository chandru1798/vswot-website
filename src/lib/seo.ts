import type { Metadata } from "next";

const siteConfig = {
  name: "Vswot",
  tagline: "Premium Digital Marketing Agency",
  description:
    "Vswot is a premium digital marketing agency delivering world-class Website Design, SEO, Performance Marketing, Social Media, and Content strategies that grow your business.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vswot.com",
  ogImage: "/og-default.jpg",
  twitter: "@vswot",
  locale: "en_US",
  email: "hello@vswot.com",
  phone: "+1 (555) 000-0000",
  address: {
    street: "123 Digital Avenue",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "US",
  },
  social: {
    twitter: "https://twitter.com/vswot",
    linkedin: "https://linkedin.com/company/vswot",
    instagram: "https://instagram.com/vswot",
    facebook: "https://facebook.com/vswot",
    youtube: "https://youtube.com/@vswot",
  },
};

export { siteConfig };

// ─── Base Metadata ────────────────────────────────────────────────────────────

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const metaTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} – ${siteConfig.tagline}`;

  const metaDescription = description || siteConfig.description;
  const metaUrl = `${siteConfig.url}${path}`;
  const metaImage = ogImage || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "digital marketing agency",
      "SEO services",
      "website design",
      "performance marketing",
      "social media marketing",
      "content marketing",
      ...keywords,
    ],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      site: siteConfig.twitter,
      images: [metaImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

// ─── Schema Markup Generators ─────────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    sameAs: Object.values(siteConfig.social),
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/og-default.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    serviceType: name,
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  description,
  image,
  publishedAt,
  author,
  url,
}: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
