export default {
  name: "post",
  title: "Post",
  type: "document",
  preview: {
    select: {
      title: "title",
      tag0: "tags.0.title",
      tag1: "tags.1.title",
      tag2: "tags.2.title",
      tag3: "tags.3.title",
    },
    prepare(selection) {
      const { title, tag0, tag1, tag2, tag3 } = selection
      const tagsArray = [tag0, tag1, tag2, tag3].filter((tag) => tag)
      return {
        title: title,
        subtitle: tagsArray.join(", "),
      }
    },
  },
  fields: [
    // Title
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // Slug
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    // Description
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    },
    // Tags
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    // Project
    {
      name: "isProject",
      title: "Project",
      description: "Check if this post is a project",
      type: "boolean",
    },
    // Body
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
              options: {
                isHighlighted: true,
              },
              validation: (Rule) =>
                Rule.required().warning("No alt text provided"),
            },
            {
              name: "bleed",
              title: "Bleed",
              type: "boolean",
              initialValue: false,
              options: {
                isHighlighted: true,
              },
            },
            {
              name: "hasBorder",
              title: "Border",
              type: "boolean",
              initialValue: false,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        { type: "code", options: { theme: "github", withFilename: true } },
      ],
    },
    // Image
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (Rule) => Rule.required().warning("No alt text provided"),
        },
      ],
    },
  ],
  initialValue: {
    isProject: false,
  },
}
