export default {
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "description",
      title: "SEO description",
      type: "text",
      validation: (Rule) => Rule.max(160).min(100),
    },
    {
      name: "image",
      title: "SEO image",
      type: "image",
      validation: (Rule) => Rule.required().warning("Please upload an image"),
    },
  ],
}
