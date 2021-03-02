import Link from "next/link"

const LinkArrow = ({ href, text }) => (
  <Link href={href}>
    <a className="py-1.5 pr-6 inline-flex font-medium">
      <span>{text}</span>
    </a>
  </Link>
)

export default LinkArrow
