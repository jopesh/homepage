import { Bookmarks } from "phosphor-react"

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: Bookmarks,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
