/* eslint-disable class-methods-use-this */
import { Component } from 'react';
import { IPerson, IPlanet, IStarship } from '../interfaces';

export default class SwapiService extends Component {
  private readonly baseURL: string;

  private readonly people: string;

  private readonly starships: string;

  private readonly planets: string;

  constructor() {
    super({});
    this.baseURL = 'https://swapi.dev/api/';
    this.people = `${this.baseURL}people/`;
    this.starships = `${this.baseURL}starships/`;
    this.planets = `${this.baseURL}planets/`;
  }

  async getResourse(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }

  async getAllPeople(): Promise<IPerson[]> {
    const response = await this.getResourse(this.people);
    return response.results.map(this.transformPerson);
  }

  async getPerson(id: string): Promise<IPerson> {
    const person = await this.getResourse(`${this.people}${id}`);
    return this.transformPerson(person);
  }

  async getAllPlanets(): Promise<IPlanet[]> {
    const response = await this.getResourse(this.planets);
    return response.results.map(this.transformPlanet);
  }

  async getPlanet(id: number): Promise<IPlanet> {
    const planet = await this.getResourse(`${this.planets}${id}`);
    return this.transformPlanet(planet);
  }

  async getAllStarships(): Promise<IStarship[]> {
    const response = await this.getResourse(this.starships);
    return response.results.map(this.transformStarship);
  }

  async getStarship(id: number): Promise<IStarship> {
    const starship = await this.getResourse(`${this.starships}${id}`);
    return this.transformStarship(starship);
  }

  transformPlanet = (planet: IPlanet) => {
    return {
      id: this.extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  transformStarship = (starship: IStarship) => {
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passenger: starship.passenger,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  transformPerson = (person: IPerson) => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  extractId(item: any): string {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
}
