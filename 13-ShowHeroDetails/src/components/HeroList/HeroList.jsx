import React, { PropTypes, Component } from 'react';
import styles from './HeroList.scss';
import { Hero } from '../index';

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

  _selectHeroHandler = (hero) => {
    if (!hero) return;
    const { selectHero, heroSelected } = this.props;
    if (hero !== heroSelected && typeof selectHero === 'function') selectHero(hero);
  };

  _renderHeroList() {
    const { heroList, heroSelected } = this.props;

    if (!heroList.length) return null;

    return heroList.map(hero => (
      <Hero
        key={`hero-list=hero-${hero.id}`}
        className={styles.hero}
        hero={hero}
        isSelected={hero === heroSelected}
        onClick={() => this._selectHeroHandler(hero)}
      />
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
