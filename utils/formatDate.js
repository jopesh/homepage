import { format } from 'date-fns'

export default function formatDate(input = new Date()) {
  return format(new Date(input), 'PPP')
}
