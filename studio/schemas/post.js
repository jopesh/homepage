export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {
            title: 'Blog',
            value: 'blog',
          },
          {
            title: 'Project',
            value: 'project',
          },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string', name: 'tag' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      mainImage: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, subtitle, publishedAt, mainImage }) {
      return {
        title,
        subtitle:
          Intl.DateTimeFormat('en-GB').format(new Date(publishedAt)) +
          ' in ' +
          subtitle
            .split('')
            .map((c, x) => (x === 0 ? c.toUpperCase() : c))
            .join(''),
        media: mainImage,
      }
    },
  },
}
