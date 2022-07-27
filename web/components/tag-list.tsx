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
    <ul className={clsx("relative z-10 -my-[1em] flex flex-wrap", className)}>
      {data.map((tag) => (
        <li key={(tag as any).title} className="mr-[1em] last:mr-0">
          <Link href={`/tag/${(tag as any).slug?.current}`}>
            <a className="flex items-center py-[1em] font-medium tracking-tight text-indigo-11 hover:underline dark:text-indigoDark-11">
              <Hash className="mr-[0.25em]" />
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
