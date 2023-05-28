import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Label} from "../store/models/label.model";
import { Listing } from "../store/models/listing.model";

@Injectable()
export class ListingService {

  constructor(private httpClient: HttpClient) {
  }

  load(labelId: number) {
    return this.httpClient.get<Listing[]>(`/api/listings/${labelId}`)
  }

  add(labelId: number, listing: Listing) {
    return this.httpClient.post<Listing>(`/api/listings/${labelId}`, listing)
  }

  update(id: number, listing: Listing) {
    return this.httpClient.put<Listing>(`/api/listings/${id}`, listing)
  }

  deleteListing(id: number) {
    return this.httpClient.delete<number>(`/api/listings/${id}`)
  }
}
