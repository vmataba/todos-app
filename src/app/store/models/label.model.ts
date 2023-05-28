import { Listing } from './listing.model';

export const SATUS_ARCHIVED = 0;

export const STATUS_ACTIVE = 1;

export interface Label {
  id?: number;
  name: string;
  listings: Listing[];
}
