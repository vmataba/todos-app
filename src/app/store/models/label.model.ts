import {Listing} from "./listing.model";

export interface Label {
  id?: number,
  name: string,
  listings: Listing[]
}
