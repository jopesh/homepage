import Link from "next/link"
import type { Tag } from "lib/sanity.models"
import { Tag as TagIcon } from "phosphor-react"

type Props = {
  data: Tag[]
}

const TagList: React.FC<Props> = ({ data }) => {
  return (
    <ul className="relative z-10 flex flex-wrap">
      {data.map((tag) => (
        <li key={(tag as any).title} className="mr-2 mt-2 last:mr-0">
          <Link href={`/tag/${(tag as any).slug?.current}`}>
            <a className="flex items-center rounded-md bg-zinc-50 px-2 py-1 text-xs font-medium tracking-tight text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus-visible:bg-indigo-50 focus-visible:text-indigo-600 focus-visible:ring dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-300 dark:focus-visible:bg-indigo-900/50 dark:focus-visible:text-indigo-300 md:text-sm">
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
