import React, { PropTypes, Component } from 'react';
import styles from './HeroList.scss';

export default class HeroList extends Component {
  static propTypes = {
    heroList: PropTypes.array,
    heroSelected: PropTypes.object,
    isLoading: PropTypes.bool,
    isLoaded: PropTypes.bool,
    error: PropTypes.object,
    getHeroes: PropTypes.func,
    selectHero: PropTypes.func,
  };

  static defaultProps = {
    heroList: [],
  };

  componentWillMount() {
    const { getHeroes, isLoaded } = this.props;
    if (!isLoaded && typeof getHeroes === 'function') getHeroes();
  }

  _renderHeroList() {
    const { heroList } = this.props;

    if (!heroList.length) return null;

    return heroList.map(hero => (
      <div key={`hero-list=hero-${hero.id}`} className={styles.hero}>
        {hero.name}
      </div>
    ));
  }

  render() {
    const { isLoading, error } = this.props;

    return (
      <div className={styles.root}>
        {isLoading && <div className={styles.loading}>'Loading...'</div>}
        {error && <div className={styles.error}>{error.message || 'Error'}</div>}
        {(!isLoading && !error) && this._renderHeroList()}
      </div>
    );
  }
}
