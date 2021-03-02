import { Pen } from "phosphor-react"

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: Pen,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string", name: "tag" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      category: "category.title",
      mainImage: "mainImage",
    },
    prepare({ title, category, mainImage }) {
      return {
        title: title,
        subtitle: category,
        media: mainImage,
      }
    },
  },
}
