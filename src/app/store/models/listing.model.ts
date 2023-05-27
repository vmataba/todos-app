import {Task} from "./task.model";

export interface Listing {
  id?: number
  title: string
  status?: number
  tasks: Task[]
}
