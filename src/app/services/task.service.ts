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

  add(listingId: number, listing: Listing) {
    return this.httpClient.post<Task>(`/api/tasks/${listingId}`, listing)
  }

  update(id: number, listing: Listing) {
    return this.httpClient.put<Task>(`/api/tasks/${id}`, listing)
  }

  deleteTask(id: number) {
    return this.httpClient.delete<number>(`/api/tasks/${id}`)
  }
}
