import { Columns } from 'phosphor-react'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'layout',
          title: 'Layout',
          type: 'string',
          options: {
            list: [
              {
                title: 'Normal',
                value: 'normal',
              },
              {
                title: 'Bleed',
                value: 'bleed',
              },
            ],
            layout: 'radio',
          },
        },
        {
          name: 'shadow',
          title: 'Shadow',
          type: 'boolean',
        },
      ],
    },
    {
      type: 'code',
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'object',
      icon: Columns,
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'string',
        },
        {
          name: 'tech',
          title: 'Tech',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
        },
        {
          name: 'live',
          title: 'Live',
          type: 'array',
          of: [
            {
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                {
                  type: 'string',
                  name: 'title',
                  title: 'Title',
                },
                {
                  type: 'url',
                  name: 'url',
                  title: 'URL',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
