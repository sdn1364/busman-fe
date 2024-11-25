import { Week } from '@/resources/views/private'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/calendar/week')({
  component: Week,
})
