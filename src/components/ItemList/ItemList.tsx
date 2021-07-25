/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import './item-list.scss';

export default class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-grop-item">
        <li className="list-group-item">LukeSkywalker</li>
        <li className="list-group-item">Darth vader</li>
        <li className="list-group-item">R2-D2</li>
      </ul>
    );
  }
}
