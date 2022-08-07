import Link from "next/link"
import DisplayViews from "./display-views"
import SanityImage from "./sanity-image"
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
            className="group relative aspect-[4/3] w-full overflow-hidden rounded border border-slate-6 focus-within:border-slate-11 hover:border-slate-11 dark:border-slateDark-6 dark:focus-within:border-slateDark-11 dark:hover:border-slateDark-11 sm:aspect-[3/2]"
          >
            <SanityImage
              src={project.image}
              key={project._id}
              sizes="(min-width: 640px) 640px, 100vw"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex flex-col-reverse items-start justify-between p-2 sm:p-4">
              {/* Info Container */}
              <div className="rounded border border-slate-6 bg-white p-2.5 dark:border-slateDark-6 dark:bg-slateDark-1 dark:text-white sm:w-full sm:px-4 sm:py-3">
                {/* Title */}
                <h3 className="text-sm font-semibold">
                  <Link href={`/post/${project.slug?.current}`}>
                    <a className="inline-block rounded after:absolute after:inset-0 after:block after:content-[''] focus:outline-none focus-visible:ring">
                      {project.title}
                    </a>
                  </Link>
                </h3>
                {/* Description */}
                <p className="mt-1 hidden text-xs tracking-tight text-slate-11 dark:text-slateDark-11 sm:block sm:text-sm">
                  {project.description}
                </p>
              </div>
              {/* View Counter */}
              <div className="flex w-full items-center justify-between">
                <div className="rounded border border-slate-6 bg-white p-2 text-xs dark:border-slateDark-6 dark:bg-slateDark-1 dark:text-white">
                  <DisplayViews slug={project.slug?.current} />
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectList
