/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IPersonDetailsState, IPersonDetailsProps } from '../../interfaces';
import SwapiService from '../../services/SwapService';
import ErrorButton from '../ErrorButton/ErrorButton';
import './person-details.scss';

export default class PersonDetails extends Component<IPersonDetailsProps, IPersonDetailsState> {
  swapi = new SwapiService();

  constructor(props: IPersonDetailsProps) {
    super(props);
    this.state = {
      person: null,
    };
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps: any) {
    const { personId } = this.props;
    if (personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return false;
    return this.swapi.getPerson(personId).then((person) => {
      this.setState({ person });
    });
  }

  render() {
    const { person } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = person;
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="chracrers"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
