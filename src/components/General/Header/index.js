import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './style.scss';

const Header = () => (
  <Row className="l-header" center="xs">
    <Col xs={10}>
      <Row>
        <Col xs={12}>
          <div className="l-header__logo-wrapper display-flex _j-center">
            <div className="l-header__logo" />
          </div>
          <div className="l-header__subscription">
            <span>Product consultancy and design studio</span>
          </div>
        </Col>
      </Row>

      <div className="l-header__description">
        <span>
          We help new business and corporates make products better and faster.
        </span>
      </div>
    </Col>
  </Row>
);

export default Header;
