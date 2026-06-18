import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { blogPost } from './sanity/schemas/blogPost';
import { caseStudy } from './sanity/schemas/caseStudy';
import { testimonial, teamMember, faq, clientLogo, service } from './sanity/schemas/index';

export default defineConfig({
  name: 'vswot-studio',
  title: 'Vswot CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Vswot Content')
          .items([
            S.listItem().title('Blog Posts').child(S.documentTypeList('blogPost')),
            S.listItem().title('Case Studies').child(S.documentTypeList('caseStudy')),
            S.listItem().title('Testimonials').child(S.documentTypeList('testimonial')),
            S.listItem().title('Team Members').child(S.documentTypeList('teamMember')),
            S.listItem().title('FAQs').child(S.documentTypeList('faq')),
            S.listItem().title('Client Logos').child(S.documentTypeList('clientLogo')),
            S.listItem().title('Services').child(S.documentTypeList('service')),
          ]),
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: [blogPost, caseStudy, testimonial, teamMember, faq, clientLogo, service],
  },
});
