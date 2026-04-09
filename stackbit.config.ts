import { defineStackbitConfig, SiteMapEntry } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'content/{slug}.json',
          fields: [
            { name: 'slug', type: 'slug', required: true },
            { name: 'hero', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'text' },
              { name: 'cta', type: 'string' },
              { name: 'ctaLink', type: 'string' },
              { name: 'email', type: 'string' },
              { name: 'backgroundImage', type: 'image' },
              { name: 'backgroundImageAlt', type: 'string' },
            ]},
            { name: 'brandStatement', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'text' },
            ]},
            { name: 'mosaic', type: 'object', fields: [
              { name: 'image1', type: 'image' },
              { name: 'image1Alt', type: 'string' },
              { name: 'image2', type: 'image' },
              { name: 'image2Alt', type: 'string' },
              { name: 'image3', type: 'image' },
              { name: 'image3Alt', type: 'string' },
            ]},
            { name: 'features', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'items', type: 'list', items: { type: 'object', fields: [
                { name: 'title', type: 'string' },
                { name: 'body', type: 'text' },
              ]}},
            ]},
            { name: 'craftsmanshipPreview', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'text' },
              { name: 'linkText', type: 'string' },
              { name: 'linkHref', type: 'string' },
              { name: 'image', type: 'image' },
              { name: 'imageAlt', type: 'string' },
            ]},
            { name: 'testimonials', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'items', type: 'list', items: { type: 'object', fields: [
                { name: 'quote', type: 'text' },
                { name: 'author', type: 'string' },
              ]}},
            ]},
            { name: 'products', type: 'list', items: { type: 'object', fields: [
              { name: 'name', type: 'string' },
              { name: 'overline', type: 'string' },
              { name: 'description', type: 'text' },
              { name: 'price', type: 'string' },
              { name: 'ecwidProductId', type: 'number' },
              { name: 'mainImage', type: 'image' },
              { name: 'mainImageAlt', type: 'string' },
              { name: 'detailImage1', type: 'image' },
              { name: 'detailImage1Alt', type: 'string' },
              { name: 'detailImage2', type: 'image' },
              { name: 'detailImage2Alt', type: 'string' },
              { name: 'background', type: 'enum', options: ['primary', 'secondary', 'warm', 'accent', 'deep'] },
              { name: 'layout', type: 'enum', options: ['imageLeft', 'imageRight'] },
            ]}},
            { name: 'childhood', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'paragraphs', type: 'list', items: { type: 'text' } },
              { name: 'image', type: 'image' },
              { name: 'imageAlt', type: 'string' },
            ]},
            { name: 'selfTaught', type: 'object', fields: [
              { name: 'heading', type: 'string' },
              { name: 'paragraphs', type: 'list', items: { type: 'text' } },
              { name: 'image', type: 'image' },
              { name: 'imageAlt', type: 'string' },
            ]},
            { name: 'values', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'items', type: 'list', items: { type: 'string' } },
            ]},
            { name: 'steps', type: 'list', items: { type: 'object', fields: [
              { name: 'number', type: 'string' },
              { name: 'heading', type: 'string' },
              { name: 'body', type: 'text' },
              { name: 'image', type: 'image' },
              { name: 'imageAlt', type: 'string' },
              { name: 'background', type: 'enum', options: ['primary', 'secondary', 'warm', 'accent', 'deep'] },
              { name: 'layout', type: 'enum', options: ['imageLeft', 'imageRight'] },
            ]}},
            { name: 'video', type: 'object', fields: [
              { name: 'overline', type: 'string' },
              { name: 'body', type: 'text' },
              { name: 'image', type: 'image' },
              { name: 'imageAlt', type: 'string' },
            ]},
          ],
        },
      ],
    }),
  ],

  siteMap: ({ documents }) => {
    const entries: SiteMapEntry[] = []
    for (const doc of documents) {
      if (doc.modelName === 'Page') {
        const slug = (doc.fields.slug as { value?: string })?.value as string
        entries.push({
          stableId: doc.id,
          urlPath: slug === 'home' ? '/' : `/${slug}`,
          document: doc,
        })
      }
    }
    return entries
  },
})
