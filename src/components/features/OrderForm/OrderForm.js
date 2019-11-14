import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = (tripCost, options) => (
  <Row>
    <Col xs={12}>
      <OrderSummary options={options} tripCost={tripCost} />
    </Col>
  </Row>
);

OrderSummary.PropTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.node,
};

export default OrderForm;
