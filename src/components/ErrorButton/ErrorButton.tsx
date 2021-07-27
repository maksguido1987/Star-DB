import { Component } from 'react';
import { IRenderError } from '../../interfaces';
import './error-button.scss';

export default class ErrorButton extends Component<{}, IRenderError> {
  constructor(props: IRenderError) {
    super(props);
    this.state = {
      renderError: false,
    };
  }

  render() {
    const { renderError } = this.state;
    if (renderError) {
      throw new Error('Error');
    }

    return (
      <button
        type="button"
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw Error
      </button>
    );
  }
}
