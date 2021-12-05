export interface TraceId {
  id: number | null;
  fishingtripId: number | null;
}

export interface Traceability {
  fishingtripId: number | null
}
export interface Traceabilities {
  traceabilities: TraceId[] | [];
}

export interface Boat {
  name: string | '',
  imguri: string | '',
  freeze_trawler: boolean | null,
  fishingequipmentid: number | null,
}

export interface TreatedBy {
  homepage: string | '',
  name: string | '',
  description: string | '',
  imguri: string | '',
  logouri: string | '',
}

export interface Fish {
  name: string | '',
  description: string | '',
  imguri: string | '',
}

export interface Location {
  name: string | null,
}

export interface Harbour {
  name: string | '',
  latitude: number | null,
  longitude: number | null,
}

export interface FishingTrip {
  id: number | null,
  startDate: string | '',
  endDate: string | '',
  boat: Boat,
  treatedby: TreatedBy,
  fish: Fish,
  location: Location,
  harbour: Harbour,
}

export interface FishingEquipment {
  name: string | null,
}

export interface State {
  traceability: Traceability,
  fishingtrip: FishingTrip,
  fishingequipment: FishingEquipment,
  traceabilities: TraceId[] | [],
  isLoading: boolean,
  error: string | '',
}

