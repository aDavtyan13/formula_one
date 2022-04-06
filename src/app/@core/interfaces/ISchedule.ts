export interface ISchedule {
  RaceTable: IRaceTable;
  round?: number;
  total: number;
}

export interface IRaceTable {
  Races: IRaces[];
}

export interface IRaces {
  date: string;
  raceName: string;
  round: number;
  season: number;
  Circuit: ICircuit;
  Results: IRace[];
}

export interface IRace {
  position: number;
  number: number;
  Driver: IDriver;
}

export interface IDriver {
  driverId: string;
  givenName: string;
  familyName: string;
  nationality: string;
  dateOfBirth: string;
}

export interface ICircuit {
  Location: ILocation;
  circuitName: string;
}

export interface ILocation {
  lat: number;
  long: number;
}
