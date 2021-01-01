import { format } from 'date-fns'

export default function formatDate(input) {
  const date = new Date(input)
  return format(date, 'EEEE, do LLLL yyyy')
}
