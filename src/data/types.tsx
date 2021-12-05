type Species = {
  id: number;
  code: string;
  name: string;
  description: string;
};

type Equipment = {
  id: number;
  code: string;
  name: string;
};

type Harbour = {
  id: number;
  code: string;
  name: string;
};

type Company = {
  id: number;
  name: string;
  description: string;
}; 

type FishingArea = {
  id: number;
  name: string;
  code: string;
};


type FishingTrip = {
  id: number;
  vesselCode: string;
  equipmentCode: string;
  landingTypeCode: string;
};

type Vessel = {
  id: number;
  code: string;
  name: string;
  callSign: string;
  landingHarbourCode: string;
  fishingEquipmentCode: string;
  ownerID: number;
  freezingTrawler: number;
};

type LandingTrip = {
  id: number;
  code: string;
  fishingEquipmentCode: string;
  landingHarbourCode: string;
  fishingAreaCode: string;
  startDate: Date;
  endDate: Date;
};

type TradeItem = {
  id: number;
  fishingTripID: number;
  speciesID: number;
  landingTripCode: string;
};

type TraceabilityNumber = {
  id: number;
  traceID: number | string;
  tradeItemID: number;
};

export type { TraceabilityNumber, TradeItem, LandingTrip, Vessel, FishingTrip, FishingArea, Company, Harbour, Equipment, Species };