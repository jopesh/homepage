import Image from "next/image"

import Heading from "./Heading"
import Placeholder from "./Placeholder"

import { urlFor } from "lib/sanity"
import Link from "next/link"

const WorkList = ({ projects }) => {
  return (
    <section id="work" className="pt-4 md:pl-8">
      <div className="flex items-center justify-between mb-6">
        <Heading>Recent work</Heading>
      </div>
      <ul className="space-y-6">
        {projects.map((p) => {
          const imageUrl = urlFor(p.mainImage).width(1440).height(900).url()
          return (
            <li key={p._id}>
              {p.mainImage && (
                <Link href={`/work/${p.slug.current}`}>
                  <a tabIndex={-1} className="base-link">
                    <Image
                      src={imageUrl}
                      width={1440}
                      height={900}
                      sizes="(min-width: 768px) 455px"
                      alt={p.mainImage.alt}
                    />
                  </a>
                </Link>
              )}
              <Link href={`/work/${p.slug.current}`}>
                <a className="block py-1 mt-2 mb-0.5  hover:underline">
                  <h3 className="font-semibold leading-snug md:text-lg">
                    {p.title}
                  </h3>
                </a>
              </Link>
              <p className="block text-gray-700 dark:text-gray-200">
                {p.summary}
              </p>
            </li>
          )
        })}
        {projects.length < 1 && <Placeholder name="projects" />}
      </ul>
    </section>
  )
}

export default WorkList
