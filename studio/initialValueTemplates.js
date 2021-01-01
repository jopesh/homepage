import T from '@sanity/base/initial-value-template-builder'

export default [
  ...T.defaults(),

  T.template({
    id: 'post-blog',
    title: 'Blog post',
    schemaType: 'post',
    value: {
      category: 'blog',
    },
  }),

  T.template({
    id: 'post-project',
    title: 'Project post',
    schemaType: 'post',
    value: {
      category: 'project',
    },
  }),
]
