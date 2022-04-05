import type { Post, Tag } from "lib/sanity.types"

import DisplayViews from "./display-views"
import Link from "next/link"
import TagList from "./tag-list"

type Props = {
  data: Post[]
}

const PostList: React.FC<Props> = ({ data }) => {
  return (
    <ul className="space-y-4">
      {data.map((post) => {
        if (!post.slug) return null
        return (
          <li
            key={post.slug?.current}
            className="group relative rounded border border-zinc-100 p-4 focus-within:border-zinc-300 hover:border-zinc-300 dark:border-zinc-800 dark:focus-within:border-zinc-600 dark:hover:border-zinc-600"
          >
            <div className="mb-2 text-xs text-zinc-500 dark:text-zinc-400">
              <DisplayViews slug={post.slug?.current} />
            </div>
            <h3 className="mb-2 font-semibold sm:text-xl">
              <Link href={`/post/${post.slug?.current}`}>
                <a className="rounded after:absolute after:inset-0 after:block after:content-[''] focus:outline-none focus-visible:ring ">
                  {post.title}
                </a>
              </Link>
            </h3>
            <p className="mb-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base sm:leading-relaxed">
              {post.description}
            </p>
            {post.tags && (
              <div className="flex justify-between text-xs md:text-sm">
                <TagList data={post.tags?.slice(0, 3) as unknown as Tag[]} />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default PostList
