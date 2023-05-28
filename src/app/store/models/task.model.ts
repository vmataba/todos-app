export interface Task {
  id?: number
  description: string
  status: number
  listingId: number
}

export const TASK_STATUS_PENDING = 0
export const TASK_STATUS_COMPLETED = 1
