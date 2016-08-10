import React, { PropTypes } from 'react';
import styles from './HeroList.scss';

const HeroList = () => (
  <div className={styles.root}>
    Hero List!
  </div>
);

HeroList.propTypes = {
  heroList: PropTypes.array,
  heroSelected: PropTypes.object,
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  error: PropTypes.object,
  getHeroes: PropTypes.func,
  selectHero: PropTypes.func,
};

HeroList.defaultProps = {
  heroList: [],
};

export default HeroList;
