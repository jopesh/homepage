import type { Tag } from "lib/sanity.types"
import Link from "next/link"
import { Hash } from "phosphor-react"
import clsx from "clsx"

type Props = {
  data: Tag[]
  className?: string
}

const TagList: React.FC<Props> = ({ data, className }) => {
  return (
    <ul className={clsx("relative z-10 -mb-[0.5em] flex flex-wrap", className)}>
      {data.map((tag) => (
        <li
          key={(tag as any).title}
          className="mr-[0.5em] mb-[0.5em] last:mr-0"
        >
          <Link href={`/tag/${(tag as any).slug?.current}`}>
            <a className="flex items-center rounded-md bg-zinc-50 p-1.5 tracking-tight text-zinc-600 hover:bg-indigo-50 font-medium border  border-zinc-100 hover:border-indigo-100 hover:text-indigo-700 focus:outline-none focus-visible:bg-indigo-50 dark:border-zinc-800 focus-visible:border-indigo-100 dark:hover:border-indigo-900 focus-visible:text-indigo-700 focus-visible:ring dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-indigo-900/25 dark:hover:text-indigo-200 dark:focus-visible:bg-indigo-900/50 dark:focus-visible:text-indigo-200">
              <Hash className="mr-1" />
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
