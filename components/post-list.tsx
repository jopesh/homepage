import Link from "next/link"
import type { Post } from "lib/sanity.models"

type Props = {
  data: Post[]
}

const PostList: React.FC<Props> = ({ data }) => {
  return (
    <ul className="space-y-6">
      {data.map((post) => (
        <li key={post.slug?.current}>
          <Link href={`/post/${post.slug?.current}`}>
            <a className="leading-tight flex mb-2 font-bold hover:underline hover:underline-offset-1 hover:decoration-1">
              {post.title}
            </a>
          </Link>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {post.description}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default PostList
