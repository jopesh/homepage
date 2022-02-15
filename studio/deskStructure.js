import MarkdownExport from "./components/MarkdownExport"
import S from "@sanity/desk-tool/structure-builder"

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(
          S.documentTypeList("post")
            .title("Posts")
            .child(
              S.document().views([
                S.view.form(),
                S.view.component(MarkdownExport).title("Markdown"),
              ])
            )
        ),
      S.listItem()
        .title("Tags")
        .schemaType("tag")
        .child(S.documentTypeList("tag").title("Tags")),
      S.divider(),
    ])
