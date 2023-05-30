import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Listing } from "../store/models/listing.model";
import { Task } from "../store/models/task.model";

@Injectable()
export class TaskService {

  constructor(private httpClient: HttpClient) {
  }

  load(listingId: number) {
    return this.httpClient.get<Task[]>(`/api/tasks/${listingId}`)
  }

  loadByLabel(labelId: number) {
    return this.httpClient.get<Task[]>(`/api/tasks/by-label/${labelId}`)
  }

  add(task: Task) {
    return this.httpClient.post<Task>(`/api/tasks/${task.listingId}`, task)
  }

  update(id: number, task: Task) {
    return this.httpClient.put<Task>(`/api/tasks/${id}`, task)
  }

  deleteTask(id: number) {
    return this.httpClient.delete<number>(`/api/tasks/${id}`)
  }
}
