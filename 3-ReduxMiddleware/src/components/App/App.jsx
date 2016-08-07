import React, { PropTypes, Component } from 'react';
import './App.scss';

export default class App extends Component {
  static propTypes = {
    fontSize: PropTypes.string,
    changeFontSize: PropTypes.func,
  };

  static defaultProps = {
    fontSize: '14px',
  };

  _changeFontSize = (increment) => {
    if (!increment) return;

    const { changeFontSize, fontSize } = this.props;

    let fontSizeNumber = Number(fontSize.replace(/[^\d]/g, ''));
    fontSizeNumber += increment;
    const measurement = fontSize.replace(/\d+/g, '');

    if (typeof changeFontSize === 'function') changeFontSize(`${fontSizeNumber}${measurement}`);
  }

  render() {
    const { fontSize } = this.props;
    const style = { fontSize };

    return (
      <div className="App" style={style}>
        <button onClick={() => this._changeFontSize(1)}>A+</button>
        <button onClick={() => this._changeFontSize(-1)}>A-</button>

        <div>Hello World!</div>
      </div>
    );
  }
}
