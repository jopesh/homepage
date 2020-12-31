import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

const LinkArrow = ({ href, text }) => (
  <Link href={href}>
    <a className='py-1.5 flex md:inline-flex font-medium'>
      <span>{text}</span>
      {/* <ArrowRight /> */}
    </a>
  </Link>
)

export default LinkArrow
