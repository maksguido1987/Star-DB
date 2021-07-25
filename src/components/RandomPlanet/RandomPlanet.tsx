/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IPlanet, IRandomPlanetState } from '../../interfaces';
import SwapiService from '../../services/SwapService';
import './random-planet.scss';

export default class RandomPlanet extends Component<{}, IRandomPlanetState> {
  swapi = new SwapiService();

  constructor(props: IRandomPlanetState) {
    super(props);
    this.state = {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    };

    this.updatePlanet();
  }

  onPlanetLoaded(planet: IPlanet) {
    this.setState({ planet });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 1;
    this.swapi.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planets"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
