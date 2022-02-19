import { SanityCodegenConfig } from "sanity-codegen"

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema.js",
  outputPath: "../web/lib/sanity.models.ts",
}

export default config
