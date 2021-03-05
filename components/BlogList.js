import Heading from "./Heading"

import Placeholder from "./Placeholder"
import Link from "next/link"

const BlogList = ({ posts }) => {
  return (
    <section id="posts" className="pt-4 md:pr-8">
      <div className="flex items-center justify-between mb-6">
        <Heading>Blog</Heading>
      </div>
      <ul className="-mt-1 space-y-6">
        {posts.map((p) => {
          return (
            <li key={p._id}>
              <Link href={`/blog/${p.slug.current}`}>
                <a className="block py-1 base-link">
                  <h3 className="font-bold leading-snug">{p.title}</h3>
                </a>
              </Link>
              <time
                dateTime={p.publishedAt}
                className="block text-sm text-gray-500 dark:text-gray-400"
              >
                {p.prettyDate}
              </time>
              <p className="block mt-1.5">{p.summary}</p>
            </li>
          )
        })}
        {posts.length < 3 && <Placeholder name="thoughts" />}
      </ul>
    </section>
  )
}

export default BlogList
