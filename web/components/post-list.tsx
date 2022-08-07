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
            className="group relative rounded border border-slate-6 p-4 focus-within:border-slate-8 hover:border-slate-8 dark:border-slateDark-6 dark:focus-within:border-slateDark-8 dark:hover:border-slateDark-8"
          >
            <div className="mb-2 text-xs text-slate-11 dark:text-slateDark-11">
              <DisplayViews slug={post.slug?.current} />
            </div>
            <h3 className="mb-2 font-semibold tracking-tight sm:text-xl">
              <Link href={`/post/${post.slug?.current}`}>
                <a className="rounded after:absolute after:inset-0 after:block after:content-[''] focus:outline-none focus-visible:ring ">
                  {post.title}
                </a>
              </Link>
            </h3>
            <p className="mb-3 text-sm leading-relaxed sm:leading-relaxed">
              {post.description}
            </p>
            {post.tags && (
              <div className="flex justify-between text-sm">
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
