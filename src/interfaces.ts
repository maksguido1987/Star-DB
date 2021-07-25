export interface IPlanet {
  id: number;
  rotation_period: string;
  name: string;
  population: string;
  diameter: string;
  url?: string;
}
export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passenger: string;
  cargo_capacity: string;
  url?: string;
}
export interface IPerson {
  id: number;
  name: string;
  gender: string;
  birth_year: string;
  eye_color: string;
  url?: string;
}
export interface IRandomPlanetState {
  id: number | null;
  name: string | null;
  population: string | null;
  rotationPeriod: string | null;
  diameter: string | null;
}
