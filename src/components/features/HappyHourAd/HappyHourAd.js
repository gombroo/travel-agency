import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  render() {
    return (
      <div className={styles.component}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.promoDescription}></div>
      </div>
    );
  }
}

export default HappyHourAd;
