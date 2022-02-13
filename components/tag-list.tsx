import Link from "next/link"
import type { Tag } from "lib/sanity.models"
import { Tag as TagIcon } from "phosphor-react"
import clsx from "clsx"

type Props = {
  data: Tag[]
  className?: string
}

const TagList: React.FC<Props> = ({ data, className }) => {
  return (
    <ul className={clsx("relative z-10 flex flex-wrap", className)}>
      {data.map((tag) => (
        <li
          key={(tag as any).title}
          className="mr-[0.5em] mb-[0.5em] last:mr-0"
        >
          <Link href={`/tag/${(tag as any).slug?.current}`}>
            <a className="flex items-center rounded-md bg-zinc-50 px-2 py-1 font-medium tracking-tight text-zinc-600 hover:bg-indigo-50 hover:text-indigo-700 focus:outline-none focus-visible:bg-indigo-50 focus-visible:text-indigo-700 focus-visible:ring dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-200 dark:focus-visible:bg-indigo-900/50 dark:focus-visible:text-indigo-200">
              <TagIcon className="mr-2" weight="duotone" />
              <span className="sr-only">Tag: </span>
              <span>{(tag as any).title}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TagList
