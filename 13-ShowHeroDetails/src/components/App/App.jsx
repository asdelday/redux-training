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
    fontSizeNumber = fontSizeNumber <= 4 ? 4 : fontSizeNumber;
    const measurement = fontSize.replace(/\d+/g, '');

    if (typeof changeFontSize === 'function') changeFontSize(`${fontSizeNumber}${measurement}`);
  }

  _renderNav() {
    return (
      <nav className={styles.nav}>
        <div className={styles.links}>
          <IndexLink to="/" className={styles.link} activeClassName={styles['link--active']}>
            List
          </IndexLink>
          <Link to="/details" className={styles.link} activeClassName={styles['link--active']}>
            Details
          </Link>
        </div>
        <div className={styles.appActions}>
          <button className={styles.incrementFontSize} onClick={() => this._changeFontSize(1)}>
            A+
          </button>
          <button className={styles.decrementFontSize} onClick={() => this._changeFontSize(-1)}>
            A-
          </button>
        </div>
      </nav>
    );
  }

  render() {
    const { fontSize, children } = this.props;
    const style = { fontSize };

    return (
      <div className={styles.root} style={style}>
        {this._renderNav()}

        <div className={styles.container}>
          {children}
        </div>
      </div>
    );
  }
}
