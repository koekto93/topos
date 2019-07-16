import React from "react";
import { Row, Col } from "react-flexbox-grid";

import { headerCaption } from "../../../constants/general";
import SVGIcon from "../../../_common/SVGIcon";

import "./style.scss";

const Header = ({ lang }) => (
  <Row className="l-header" center="xs">
    <Col xs={10}>
      <Row center="xs">
        <Col xs={12}>
          <div className="l-header__logo-wrapper display-flex _j-center">
            <SVGIcon name="topos" />
          </div>
          <div className="l-header__subscription">
            <span>PRODUCT CONSULTANCY AND DESIGN STUDIO</span>
          </div>
        </Col>
      </Row>

      <div className="l-header__description">
        <span>{headerCaption[lang]}</span>
      </div>
    </Col>
  </Row>
);

export default Header;
