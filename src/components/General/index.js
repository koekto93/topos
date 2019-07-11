import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Header from './Header';
import Services from './Services';
import Clients from './Clients';
import Points from './Points';
import Footer from './Footer';
import LangButton from '../../_common/LangButton';

import './style.scss';

const General = () => {
  return (
    <Row className="l-general l-app-content">
      <Col xs={12}>
        <LangButton />
        <Header />
        <div className="l-general__services-wrapper">
          <Services />
        </div>
        <div className="l-general__clients-wrapper">
          <Clients />
        </div>
        <div className="l-general__points-wrapper">
          <Points />
        </div>
        <div className="l-general__footer-wrapper">
          <Footer />
        </div>
      </Col>
    </Row>
  );
};

export default General;
