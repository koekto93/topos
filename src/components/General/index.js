import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Header from './Header';
import Services from './Services';
import LangButton from '../../_common/LangButton';

import './style.scss';

const General = () => (
  <Row className="l-general">
    <Col xs={12}>
      <LangButton />
      <Header />
      <div className="l-general__services-wrapper">
        <Services />
      </div>
    </Col>
  </Row>
);

export default General;
