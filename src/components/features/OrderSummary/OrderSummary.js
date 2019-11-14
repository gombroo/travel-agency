import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

//import {calculateTotal} from '../../../utils/calculateTotal';
//import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = props => (
  <h2 className={styles.component}>
    Total: <strong>{props.tripCosts}</strong>
    {/*Total: <strong>{calculateTotal(formatPrice(props.tripCosts), props.options)}</strong>*/}
  </h2>
);

OrderSummary.propTypes ={
  tripCosts: PropTypes.node,
  options: PropTypes.node,
};

export default OrderSummary;
