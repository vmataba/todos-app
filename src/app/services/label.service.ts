import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Label} from "../store/models/label.model";
import { environment } from "src/environments/environment";
import { of } from "rxjs";

@Injectable()
export class LabelService {

  endPoint = environment.apiUrl

  constructor(private httpClient: HttpClient) {
  }

  load(userId: number) {
    if (!userId){
      return of([])
    }
    return this.httpClient.get<Label[]>(`${this.endPoint}/api/labels/${userId}`,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  add(userId: number, label: Label) {
    return this.httpClient.post<Label>(`${this.endPoint}/api/labels/${userId}`, label,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  update(id: number, label: Label) {
    return this.httpClient.put<Label>(`${this.endPoint}/api/labels/${id}`, label,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }

  deleteLabel(id: number) {
    return this.httpClient.delete<number>(`${this.endPoint}/api/labels/${id}`,{
      headers: {
        'Authorization': 'Basic '+sessionStorage.getItem('auth')
      }
    })
  }
}
