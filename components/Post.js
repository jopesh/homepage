import Image from "next/image"
import BlockContent from "./BlockContent"

const Post = ({ data }) => {
  const { title, publishedAt, body, prettyDate, readingTime } = data
  return (
    <article className="mx-auto my-6 prose lg:prose-lg lg:my-8 dark:prose-dark">
      <h1>{title}</h1>
      <div className="flex items-center my-6 space-x-3">
        <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src="/images/portrait.jpg"
            height="48"
            width="48"
            layout="fixed"
            priority
            alt="Portrait of John"
          />
        </div>
        <div className="flex flex-col flex-grow text-sm leading-snug sm:flex-row sm:justify-between sm:text-base">
          <span>John Schmidt</span>
          <span>
            <span>{readingTime.text}</span>
            <span className="mx-2">–</span>
            <time dateTime={publishedAt}>{prettyDate}</time>
          </span>
        </div>
      </div>
      {body && <BlockContent blocks={body} className="mt-6" />}
    </article>
  )
}

export default Post
