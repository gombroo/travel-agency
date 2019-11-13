import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = tripCost => (

  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} />
    </Col>
  </Row>
);

OrderSummary.PropTypes = {
  tripCost: PropTypes.string,
};

export default OrderForm;
