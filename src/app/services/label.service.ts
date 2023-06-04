import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Label} from "../store/models/label.model";
import { environment } from "src/environments/environment";

@Injectable()
export class LabelService {

  endPoint = environment.apiUrl

  constructor(private httpClient: HttpClient) {
  }

  load(userId: number) {
    return this.httpClient.get<Label[]>(`${this.endPoint}/api/labels/${userId}`)
  }

  add(userId: number, label: Label) {
    return this.httpClient.post<Label>(`${this.endPoint}/api/labels/${userId}`, label)
  }

  update(id: number, label: Label) {
    return this.httpClient.put<Label>(`${this.endPoint}/api/labels/${id}`, label)
  }

  deleteLabel(id: number) {
    return this.httpClient.delete<number>(`${this.endPoint}/api/labels/${id}`)
  }
}
