/* eslint-disable react/prefer-stateless-function */
import '../../styles.scss';
import './app.scss';
import { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../ErrorButton/ErrorButton';
import { IAppState } from '../../interfaces';
import ErrorIndicator from '../Error/ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

export default class App extends Component<{}, IAppState> {
  constructor(props: IAppState) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) return <ErrorIndicator />;
    return (
      <div className="wrapper">
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
      </div>
    );
  }
}
