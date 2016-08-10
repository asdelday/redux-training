import React, { PropTypes } from 'react';
import styles from './HeroDetails.scss';

const HeroDetails = ({ heroSelected }) => {
  if (!heroSelected) return <div>No Hero Selected</div>;

  const { thumbnail, name, description } = heroSelected;
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={image} alt="hero" />
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

HeroDetails.propTypes = {
  heroSelected: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  getHero: PropTypes.func,
};

export default HeroDetails;
