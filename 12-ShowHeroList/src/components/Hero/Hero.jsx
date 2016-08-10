import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import styles from './Hero.scss';

export default class Hero extends Component {
  static propTypes = {
    hero: PropTypes.object.isRequired,
    isSelected: PropTypes.bool,
    selectHero: PropTypes.func,
    className: PropTypes.string,
  };

  render() {
    const { className, hero, isSelected, ...props } = this.props;

    if (!hero) return null;

    const { thumbnail } = hero;
    const image = `${thumbnail.path}.${thumbnail.extension}`;

    return (
      <div
        {...props}
        className={cx(className, styles.root, { [styles['root--selected']]: isSelected })}
      >
        <div className={styles.image}>
          <img src={image} alt="hero-miniature" />
        </div>
        <div className={styles.name}>{hero.name}</div>
      </div>
    );
  }
}
