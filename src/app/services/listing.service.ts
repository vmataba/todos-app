import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Label} from "../store/models/label.model";
import { Listing } from "../store/models/listing.model";
import { environment } from "src/environments/environment";

@Injectable()
export class ListingService {

  constructor(private httpClient: HttpClient) {
  }

  endPoint = environment.apiUrl

  load(labelId: number) {
    return this.httpClient.get<Listing[]>(`${this.endPoint}/api/listings/${labelId}`)
  }

  add(labelId: number, listing: Listing) {
    return this.httpClient.post<Listing>(`${this.endPoint}/api/listings/${labelId}`, listing)
  }

  update(id: number, listing: Listing) {
    return this.httpClient.put<Listing>(`${this.endPoint}/api/listings/${id}`, listing)
  }

  deleteListing(id: number) {
    return this.httpClient.delete<number>(`${this.endPoint}/api/listings/${id}`)
  }
}
