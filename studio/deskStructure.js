import S from "@sanity/desk-tool/structure-builder"
import { HouseLine } from "phosphor-react"

import MarkdownExport from "./components/MarkdownExport"
import Preview from "./components/Preview"

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Front page")
        .icon(HouseLine)
        .child(
          S.document()
            .schemaType("frontpage")
            .documentId("frontpage")
            .title("Front page")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["frontpage"].includes(listItem.getId())
      ),
    ])

export const getDefaultDocumentNode = (props) => {
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
