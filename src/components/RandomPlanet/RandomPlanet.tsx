/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IPlanet, IRandomPlanetState } from '../../interfaces';
import SwapiService from '../../services/SwapService';
import ErrorIndicator from '../Error/ErrorIndicator';
import { Spinner } from '../Spinner/Spinner';
import './random-planet.scss';

export default class RandomPlanet extends Component<{}, IRandomPlanetState> {
  swapi = new SwapiService();

  interval: NodeJS.Timer;

  constructor(props: IRandomPlanetState) {
    super(props);
    this.state = {
      planet: {
        id: '2',
        name: 'Eath',
        population: '7.500000000',
        rotationPeriod: '35',
        diameter: '6500',
      },
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet: IPlanet) => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15) + 2;
    this.swapi.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    const {
      planet: { id, name, population, rotationPeriod, diameter },
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error && !loading) {
      return <ErrorIndicator />;
    }

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
