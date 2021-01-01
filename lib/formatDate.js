import { format } from 'date-fns'

export default function formatDate(input) {
  let date
  if (input) {
    date = new Date(input)
  } else {
    date = new Date()
  }
  return format(date, 'EEEE, do LLLL yyyy')
}
