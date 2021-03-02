import S from "@sanity/desk-tool/structure-builder"

import MarkdownExport from "./components/MarkdownExport"
import Preview from "./components/Preview"

export default () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems(),
      // S.divider(),
      // S.listItem()
      //   .title("Blog posts")
      //   .icon(Lightning)
      //   .child(
      //     S.documentList()
      //       .schemaType("post")
      //       .title("Blog posts")
      //       .filter('category == "blog"')
      //       .menuItems([...S.documentTypeList("post").getMenuItems()])
      //   ),
      // S.listItem()
      //   .title("Project posts")
      //   .icon(Pen)
      //   .child(
      //     S.documentList()
      //       .schemaType("post")
      //       .title("Project posts")
      //       .filter('category == "project"')
      //       .menuItems([...S.documentTypeList("post").getMenuItems()])
      //   ),
      // List out the rest of the document types, but filter out the config type
    ])

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view.component(Preview).title("Preview"),
      S.view.component(MarkdownExport).title("Markdown"),
    ])
  }
  return S.document().views([S.view.form()])
}
