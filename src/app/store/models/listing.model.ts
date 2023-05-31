import {Task} from "./task.model";

export const LISTING_STATUS_ARCHIVED = 0

export const LISTING_STATUS_ACTIVE = 1

export interface Listing {
  id?: number
  title: string
  status?: number
  tasks: Task[]
  inViewMode: boolean
}
