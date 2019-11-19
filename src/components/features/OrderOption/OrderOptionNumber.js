import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption';

const OrderOptionNumber = ({currentValue, setOptionValue, limits}) => (
  <div className={styles.number}>
    <input
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
      className={styles.inputSmall}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
