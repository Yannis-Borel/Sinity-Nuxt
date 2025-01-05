// schemas/homepage.ts
import { defineArrayMember, defineField, defineType } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'homepage',
  type: 'document',
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      type: 'object',
      name: 'hero',
      fields: [
        { type: 'string', name: 'title' },
        { type: 'string', name: 'text' },
        {
          name: 'video',
          title: 'Upload Video',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'videoUrl',
          title: 'URL de la Vidéo',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            { type: 'string', name: 'value' },
            { type: 'string', name: 'title' },
          ],
        }),
      ],
    }),
    // Nouvelle section pricing
    defineField({
      name: 'pricing',
      title: 'Pricing Section',
      type: 'object',
      fields: [
        { type: 'string', name: 'title' },
        { type: 'string', name: 'subtitle' },
        defineField({
          name: 'plans',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'plan',
              fields: [
                { type: 'string', name: 'title' },
                { type: 'number', name: 'monthlyPrice' },
                { type: 'number', name: 'yearlyPrice' },
                { type: 'boolean', name: 'isPremium' },
                defineField({
                  name: 'features',
                  type: 'array',
                  of: [{ type: 'string' }]
                }),
                { type: 'string', name: 'buttonText' }
              ]
            })
          ]
        })
      ]
    })
  ],
});

// types/Homepage.ts
export interface Homepage {
  title: string;
  hero: {
    title: string;
    text: string;
    video?: any;
    videoUrl?: string;
  };
  posts: Array<{
    value: string;
    title: string;
  }>;
  pricing: {
    title: string;
    subtitle: string;
    plans: Array<{
      title: string;
      monthlyPrice: number;
      yearlyPrice: number;
      isPremium: boolean;
      features: string[];
      buttonText: string;
    }>;
  };
}