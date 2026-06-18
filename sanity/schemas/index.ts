import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'clientRole', title: 'Role / Title', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'clientImage', title: 'Client Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'quote', title: 'Testimonial Quote', type: 'text', rows: 4, validation: (R) => R.required() }),
    defineField({ name: 'rating', title: 'Rating (1–5)', type: 'number', validation: (R) => R.min(1).max(5) }),
    defineField({ name: 'service', title: 'Service', type: 'string' }),
    defineField({ name: 'result', title: 'Key Result (e.g. "3x ROAS")', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'company', media: 'clientImage' },
  },
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'role', title: 'Role / Title', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
        defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
      ],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'featured', title: 'Show on About Page', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (R) => R.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['General', 'SEO', 'Paid Ads', 'Social Media', 'Web Development', 'Pricing', 'Process'],
      },
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
});

export const clientLogo = defineType({
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Company Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'logo', title: 'Logo (SVG or PNG)', type: 'image', options: { hotspot: false } }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'active', title: 'Show in Marquee', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'fullDescription', title: 'Full Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'features',
      title: 'Features / What\'s Included',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
        ],
      }],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'shortDescription' },
  },
});
