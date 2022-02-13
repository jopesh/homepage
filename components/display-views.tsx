import { Eye } from "phosphor-react"
import { fetcher } from "lib/fetcher"
import useSWR from "swr"

type Props = {
  slug: string
}

const DisplayViews: React.FC<Props> = ({ slug }) => {
  const { data, error } = useSWR(`/api/views/${slug}`, fetcher)
  if (!data && !error)
    return (
      <div className="inline-block animate-pulse rounded bg-zinc-100 text-transparent dark:bg-zinc-800">
        Loading views
      </div>
    )
  return (
    <div className="flex cursor-all-scroll items-center">
      <Eye className="mr-1.5" />
      <span className="tabular-nums">{data?.views} views</span>
    </div>
  )
}

export default DisplayViews
