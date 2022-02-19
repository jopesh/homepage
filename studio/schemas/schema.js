import callout from "./objects/callout"
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"
import post from "./documents/post"
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"
import seo from "./objects/seo"
import settings from "./singletons/settings"
import tag from "./documents/tag"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    tag,
    seo,
    callout,
    settings,
  ]),
})
