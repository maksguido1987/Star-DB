/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IPerson, IPersonFunc, IItemListState } from '../../interfaces';
import SwapiService from '../../services/SwapService';
import { Spinner } from '../Spinner/Spinner';
import './item-list.scss';

export default class ItemList extends Component<IPersonFunc, IItemListState> {
  swapi = new SwapiService();

  constructor(props: IPersonFunc) {
    super(props);
    this.state = {
      peopleList: null,
    };
  }

  componentDidMount() {
    this.swapi.getAllPeople().then((peopleList) => this.setState({ peopleList }));
  }

  renderItems(arr: IPerson[]) {
    return arr.map(({ id, name }) => {
      const { onItemSelected } = this.props;
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => onItemSelected(id)}
          role="presentation"
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);
    return <ul className="item-list list-grop-item">{items}</ul>;
  }
}
