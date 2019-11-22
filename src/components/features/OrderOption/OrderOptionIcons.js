import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({setOptionValue, values, required, currentValue}) => (
  <div className={styles.icon}>
    {required ? (
      ''
    ) : (
      <div className={styles.icon} onClick={() => setOptionValue('')} >
        <Icon name="times-circle">None</Icon>
      </div>
    )}

    {values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon
          name={value.icon}
          className={`${styles.icon} ${currentValue === value.id ? styles.iconActive : ''
          }`}
        />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.array,
};

export default OrderOptionIcons;
