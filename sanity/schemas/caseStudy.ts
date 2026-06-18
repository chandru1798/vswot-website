import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({
      name: 'services',
      title: 'Services Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'results',
      title: 'Key Results',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'metric', title: 'Metric', type: 'string' }),
          defineField({ name: 'label', title: 'Label', type: 'string' }),
        ],
      }],
    }),
    defineField({ name: 'body', title: 'Case Study Content', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 2 }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'clientName', media: 'coverImage' },
  },
});
