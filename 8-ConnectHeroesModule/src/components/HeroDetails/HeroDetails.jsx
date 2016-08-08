import React, { PropTypes } from 'react';
import styles from './HeroDetails.scss';

const HeroDetails = () => (
  <div className={styles.root}>
    Hero Details!
  </div>
);

HeroDetails.propTypes = {
  heroSelected: PropTypes.object,
};

export default HeroDetails;
