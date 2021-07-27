export interface IPlanet {
  [x: string]: string | null;
  id: string;
  rotationPeriod: string;
  name: string;
  population: string;
  diameter: string;
  url?: string;
}

export interface IPlanetData {
  id: string | null;
  name: string | null;
  population: string | null;
  rotationPeriod: string | null;
  diameter: string | null;
}
export interface IRandomPlanetState {
  planet: IPlanetData;
  loading: boolean;
  error: boolean;
}
export interface IStarship {
  [x: string]: string | null;
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  crew: string;
  passenger: string;
  cargoCapacity: string;
  url?: string;
}
export interface IPerson {
  [x: string]: string | null;
  id: string;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
  url?: string;
}
export interface IPersonFunc {
  onItemSelected?: (id: string) => void;
}
export interface IItemListState {
  peopleList: IPerson[];
}
export interface IPersonDetailsProps {
  personId: string;
}
export interface IPersonDetailsState {
  person: IPerson | null;
}
export interface IPeoplePageState {
  selectedPerson: string | null;
  hasError: boolean;
}
export interface IAppState {
  hasError: boolean;
}
export interface IRenderError {
  renderError: boolean;
}
