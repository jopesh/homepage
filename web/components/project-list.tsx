import Link from "next/link"
import DisplayViews from "./display-views"
import SanityImage from "./sanity-image"
import TagList from "./tag-list"
import type { Tag } from "lib/sanity.types"
import type { Project } from "pages/index"

type Props = {
  data: Project[]
}

const ProjectList: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data.map((project) => {
        if (!project.slug) return null
        return (
          <li
            key={project.slug?.current}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded border border-zinc-100 focus-within:border-zinc-900 hover:border-zinc-900 dark:border-zinc-800 dark:focus-within:border-zinc-100 dark:hover:border-zinc-100 sm:aspect-[3/2]"
          >
            <SanityImage
              src={data[0].image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              sizes="(min-width: 640px) 640px, 100vw"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
              {/* View Counter */}
              <div className="rounded border border-zinc-200 bg-white p-2 text-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                <DisplayViews slug={project.slug?.current} />
              </div>
              {/* Info Container */}
              <div className="w-full rounded border border-zinc-200 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white sm:p-4">
                {/* Title */}
                <h3 className="mb-3 text-sm font-semibold sm:text-base">
                  <Link href={`/post/${project.slug?.current}`}>
                    <a className="inline-block rounded after:absolute after:inset-0 after:block after:content-[''] focus:outline-none focus-visible:ring">
                      {project.title}
                    </a>
                  </Link>
                </h3>
                {/* Description */}
                <p className="mb-2 hidden text-xs text-zinc-700 dark:text-zinc-300 sm:block sm:text-sm">
                  {project.description}
                </p>
                {/* Tags */}
                {project.tags && (
                  <div className="text-xs md:text-sm">
                    <TagList
                      data={project.tags?.slice(0, 2) as unknown as Tag[]}
                    />
                  </div>
                )}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectList
