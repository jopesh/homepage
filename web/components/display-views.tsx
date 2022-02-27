import { Eye } from "phosphor-react"
import { fetcher } from "lib/fetcher"
import useSWR from "swr"

type Props = {
  slug: string
}

const DisplayViews: React.FC<Props> = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  return (
    <div className="flex items-center">
      <Eye className="mr-1.5" />
      <span className="tabular-nums">
        {data?.views ? `${data?.views} views` : "–"}
      </span>
    </div>
  )
}

export default DisplayViews
