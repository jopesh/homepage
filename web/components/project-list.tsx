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
    <ul className="space-y-4">
      {data.map((project) => {
        if (!project.slug) return null
        return (
          <li
            key={project.slug?.current}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded border border-zinc-100 focus-within:border-zinc-900 hover:border-zinc-900 dark:border-zinc-800 dark:focus-within:border-zinc-100 dark:hover:border-zinc-100 sm:aspect-[3/2]"
          >
            <SanityImage
              src={project.image}
              key={project._id}
              sizes="(min-width: 640px) 640px, 100vw"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col-reverse justify-between p-2 sm:p-4 items-start">
              {/* Info Container */}
              <div className="rounded border border-zinc-200 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white sm:px-4 sm:py-3">
                {/* Title */}
                <h3 className="text-sm font-semibold sm:text-base">
                  <Link href={`/post/${project.slug?.current}`}>
                    <a className="inline-block rounded after:absolute after:inset-0 after:block after:content-[''] focus:outline-none focus-visible:ring">
                      {project.title}
                    </a>
                  </Link>
                </h3>
                {/* Description */}
                <p className="mt-1.5 hidden text-xs text-zinc-700 dark:text-zinc-300 sm:block sm:text-sm">
                  {project.description}
                </p>
              </div>
              {/* View Counter */}
              <div className="flex justify-between items-center w-full">
                <div className="rounded border border-zinc-200 bg-white p-2 text-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                  <DisplayViews slug={project.slug?.current} />
                </div>
                {project.tags && (
                  <div className="text-xs sm:text-sm">
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
