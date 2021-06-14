import Heading from "./Heading"

import Placeholder from "./Placeholder"
import Link from "next/link"

const BlogList = ({ posts }) => {
  return (
    <section id="posts" className="pt-4 md:pr-8">
      <div className="flex items-center justify-between mb-6">
        <Heading>Blog</Heading>
      </div>
      <ul className="-mt-1 space-y-8">
        {posts.map((p) => {
          return (
            <li key={p._id}>
              <Link href={`/blog/${p.slug.current}`}>
                <a className="block pb-1 hover:underline ">
                  <h3 className="font-semibold leading-snug md:text-lg">
                    {p.title}
                  </h3>
                </a>
              </Link>
              <p className="block mt-0.5 text-gray-700 dark:text-gray-200">
                {p.summary}
              </p>
            </li>
          )
        })}
        {posts.length < 3 && <Placeholder name="thoughts" />}
      </ul>
    </section>
  )
}

export default BlogList
