import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Listing } from "../store/models/listing.model";
import { Task } from "../store/models/task.model";
import { environment } from "src/environments/environment";

@Injectable()
export class TaskService {

  endPoint = environment.apiUrl

  constructor(private httpClient: HttpClient) {
  }

  load(listingId: number) {
    return this.httpClient.get<Task[]>(`${this.endPoint}/api/tasks/${listingId}`,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  loadByLabel(labelId: number) {
    return this.httpClient.get<Task[]>(`${this.endPoint}/api/tasks/by-label/${labelId}`,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  add(task: Task) {
    return this.httpClient.post<Task>(`${this.endPoint}/api/tasks/${task.listingId}`, task,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  update(id: number, task: Task) {
    return this.httpClient.put<Task>(`${this.endPoint}/api/tasks/${id}`, task,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  deleteTask(id: number) {
    return this.httpClient.delete<number>(`${this.endPoint}/api/tasks/${id}`,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }
}
