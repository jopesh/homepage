export default {
  name: "frontpage",
  title: "Front page",
  type: "document",
  fields: [
    {
      name: "posts",
      title: "Featured posts",
      type: "array",
      // options: {
      //   layout: "grid",
      // },
      of: [
        {
          name: "post",
          type: "reference",
          to: [{ type: "post" }],
          options: {
            filter:
              "references(*[_type == 'category' && slug.current == $category][0]._id)",
            filterParams: {
              category: "blog",
            },
          },
        },
      ],
    },
    {
      name: "projects",
      title: "Featured projects",
      type: "array",
      // options: {
      //   layout: "grid",
      // },
      of: [
        {
          name: "post",
          type: "reference",
          to: [{ type: "post" }],
          options: {
            filter:
              "references(*[_type == 'category' && slug.current == $category][0]._id)",
            filterParams: {
              category: "work",
            },
          },
        },
      ],
    },
  ],
}
