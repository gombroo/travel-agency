import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  };

  constructor() {
    super();
    setInterval(() => {
      // run this.forceUpdate() every second
      this.forceUpdate();
    }, 1000);
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    return (
      <div className={styles.component}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.countdown}>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

export default HappyHourAd;
