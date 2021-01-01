import S from '@sanity/base/structure-builder'

export default [
  S.initialValueTemplateItem('post-blog').title('Blog post').id('post'),
  S.initialValueTemplateItem('post-project')
    .title('Project post')
    .id('project'),
  // ...S.defaultInitialValueTemplateItems(),
]
