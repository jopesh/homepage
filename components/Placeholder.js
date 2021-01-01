import { Lightning } from 'phosphor-react'

const Placeholder = ({ name = 'content' }) => {
  return (
    <li className='flex items-center space-x-4 text-gray-500 dark:text-gray-400'>
      <Lightning size='24' />
      <span>More {name} coming soon ...</span>
    </li>
  )
}

export default Placeholder
