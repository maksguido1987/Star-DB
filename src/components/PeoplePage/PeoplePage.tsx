/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IPeoplePageState } from '../../interfaces';
import ErrorIndicator from '../Error/ErrorIndicator';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import './people-page.scss';

export default class PeoplePage extends Component<{}, IPeoplePageState> {
  constructor(props: IPeoplePageState) {
    super(props);
    this.state = {
      selectedPerson: '1',
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id: string) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;
    const { hasError } = this.state;
    if (hasError) return <ErrorIndicator />;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
