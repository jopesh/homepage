import Link from "next/link"
import type { Post } from "lib/sanity.models"
import { Tag } from "phosphor-react"

type Props = {
  data: Post[]
}

const PostList: React.FC<Props> = ({ data }) => {
  return (
    <ul className="space-y-4">
      {data.map((post) => (
        <li key={post.slug?.current}>
          <Link href={`/post/${post.slug?.current}`}>
            <a className="flex flex-col rounded border border-zinc-200 p-4 hover:border-current dark:border-zinc-800">
              <h3 className="mb-2 flex font-bold sm:text-xl">{post.title}</h3>
              <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed">
                {post.description}
              </p>
              <ul className="flex flex-wrap">
                {post.tags?.map((tag) => (
                  <li key={(tag as any).title} className="mr-2 mt-2 last:mr-0">
                    <Link href={`/tag/${(tag as any).slug?.current}`}>
                      <a className="flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium tracking-tight text-indigo-800 hover:bg-indigo-100 focus:outline-none focus-visible:ring dark:bg-indigo-900/50 dark:text-indigo-100 dark:hover:bg-indigo-800 md:text-sm">
                        <Tag className="mr-2" weight="duotone" />
                        <span>{(tag as any).title}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostList
