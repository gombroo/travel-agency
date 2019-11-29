import React from 'react';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render() {
    return (
      <div className={styles.component}>
        <div className={styles.title}></div>
        <div className={styles.countdown}></div>
      </div>
    );
  }
}

export default HappyHourAd;
