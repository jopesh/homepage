import Image from 'next/image'
import Link from 'next/link'

const Error = ({ code }) => {
  return (
    <div className='text-center'>
      <Image src='/images/error.svg' width='auto' height='200' />
      <h1 className='mt-6 text-xl font-bold'>Something is odd ...</h1>
      <p className='my-3'>
        It might not yet exist or has already faded. I'd rather{' '}
        <Link href='/'>
          <a>go back to the homepage</a>
        </Link>
        .
      </p>
      {code && <code className='block my-6'>Error code: {code}</code>}
    </div>
  )
}

export default Error
