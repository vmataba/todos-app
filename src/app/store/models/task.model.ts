export interface Task {
  id?: number
  description: string
  status: number
  listingId: number
  created_at:string
}

export const TASK_STATUS_PENDING = 0
export const TASK_STATUS_COMPLETED = 1
