import { toMarkdown } from "lib/sanity"
import readingTime from "reading-time"

export function getReadingTime(blocks) {
  const text = toMarkdown(blocks)
  const time = readingTime(text)
  return time
}
