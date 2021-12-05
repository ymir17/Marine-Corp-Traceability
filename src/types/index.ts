
type FishingTrip = {
  StartDate: string;
  EndDate: string;
};

type Boat = {
  BOAT_NAME: string;
  IsFreezerTrawler: boolean;
};

type Harbour = {
  HARBOUR_NAME:string;
};

type FishingEquipment = {
  FISHING_EQUIPMENT: string;
};

type Location = {
  LOCATION: string;
};

type TreatedBy = {
  TREATED_BY_NAME: string;
  TREATED_BY_DESCRIPTION: string;
  TREATED_BY_LOGO: string;
  TREATED_BY_HOMEPAGE: string;
  TREATED_BY_IMAGE: string;
};

type Fish = {
  FISH_ID: number;
  FISH_DESCRIPTION: string;
  FISH_IMG: string;
};


export type { Fish, TreatedBy, Location, FishingEquipment, Harbour, Boat, FishingTrip }; 
 
