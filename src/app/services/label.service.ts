import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Label} from "../store/models/label.model";

@Injectable()
export class LabelService {

  constructor(private httpClient: HttpClient) {
  }

  load(userId: number) {
    return this.httpClient.get<Label[]>(`/api/labels/${userId}`)
  }

  add(userId: number, label: Label) {
    return this.httpClient.post<Label>(`/api/labels/${userId}`, label)
  }

  update(id: number, label: Label) {
    return this.httpClient.put<Label>(`/api/labels/${id}`, label)
  }

  deleteLabel(id: number) {
    return this.httpClient.delete<number>(`/api/labels/${id}`)
  }
}
