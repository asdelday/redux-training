import React, { PropTypes, Component } from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    fontSize: PropTypes.string,
    changeFontSize: PropTypes.func,
    children: PropTypes.node,
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
    const activeStyle = {
      color: 'red',
      fontWeight: 'bold',
    };

    return (
      <div className={styles.root} style={style}>
        <button onClick={() => this._changeFontSize(1)}>A+</button>
        <button onClick={() => this._changeFontSize(-1)}>A-</button>

        <IndexLink to="/" activeStyle={activeStyle}>List</IndexLink>
        <Link to="/details" activeStyle={activeStyle}>Details</Link>

        <div className={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
