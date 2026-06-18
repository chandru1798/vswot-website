import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  readingTime,
  author->{name, avatar, role},
  categories[]->{title, slug}
}`;

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  featuredImage,
  publishedAt,
  readingTime,
  author->{name, avatar, role, bio},
  categories[]->{title, slug},
  seo
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  client,
  industry,
  services,
  featuredImage,
  results,
  publishedAt
}`;

export const caseStudyQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  client,
  industry,
  services,
  challenge,
  solution,
  results,
  featuredImage,
  gallery,
  testimonial,
  publishedAt,
  seo
}`;

export const testimonialsQuery = `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
  _id,
  name,
  role,
  company,
  avatar,
  content,
  rating,
  service
}`;

export const allTestimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  role,
  company,
  avatar,
  content,
  rating,
  service
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  avatar,
  department,
  social
}`;

export const clientLogosQuery = `*[_type == "clientLogo" && featured == true] | order(_createdAt asc) {
  _id,
  name,
  logo,
  website
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  category
}`;

export const faqsByCategoryQuery = `*[_type == "faq" && category == $category] | order(order asc) {
  _id,
  question,
  answer
}`;
