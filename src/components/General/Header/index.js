import React from "react";
import { Row, Col } from "react-flexbox-grid";

import SVGIcon from "../../../_common/SVGIcon";

import "./style.scss";

const Header = () => (
  <Row className="l-header" center="xs">
    <Col xs={10}>
      <Row center="xs">
        <Col xs={12}>
          <div className="l-header__logo-wrapper display-flex _j-center">
            <SVGIcon name="topos" />
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
