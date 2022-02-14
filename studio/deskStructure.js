import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Posts")),
      S.listItem()
        .title("Tags")
        .schemaType("tag")
        .child(S.documentTypeList("tag").title("Tags")),
      S.divider(),
    ])
