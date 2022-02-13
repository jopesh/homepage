import type { Post, Tag } from "lib/sanity.models"

import Link from "next/link"
import TagList from "./tag-list"

type Props = {
  data: Post[]
}

const PostList: React.FC<Props> = ({ data }) => {
  return (
    <ul className="space-y-4">
      {data.map((post) => (
        <li
          key={post.slug?.current}
          className="group relative rounded border border-zinc-100 p-4 focus-within:border-zinc-300 hover:border-zinc-300 dark:border-zinc-800 dark:focus-within:border-zinc-600 dark:hover:border-zinc-600"
        >
          <h3 className="mb-2 font-semibold sm:text-xl">
            <Link href={`/post/${post.slug?.current}`}>
              <a className="rounded after:absolute after:inset-0 after:block after:content-[''] focus:outline-none focus-visible:ring ">
                {post.title}
              </a>
            </Link>
          </h3>
          <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed">
            {post.description}
          </p>
          <TagList data={post.tags as unknown as Tag[]} />
        </li>
      ))}
    </ul>
  )
}

export default PostList
