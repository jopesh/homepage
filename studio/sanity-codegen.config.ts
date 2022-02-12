import { SanityCodegenConfig } from "sanity-codegen"

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema.js",
  outputPath: "../lib/sanity.models.ts",
}

export default config
