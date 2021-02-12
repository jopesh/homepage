import useReadingTime from 'use-reading-time'

const ReadingTime = ({ text }) => {
  const { readingTime } = useReadingTime(text)
  return <span>{readingTime} min read</span>
}

export default ReadingTime
