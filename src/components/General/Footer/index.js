import React from "react";
import { Row, Col } from "react-flexbox-grid";

import { footerBlockNameText } from "../../../constants/general";

import "./style.scss";

const lang = "eng";

const Footer = () => (
  <Row center="xs" className="l-footer">
    <Col xs={12}>
      <div className="l-footer__gradient-block" />
      <Row className="l-footer__blocks-wrapper" center="xs">
        <Col xs={11}>
          <Row>
            <Col>
              <div className="l-footer__title">{footerBlockNameText[lang]}</div>
            </Col>
          </Row>
          <div>dddsa</div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Footer;
