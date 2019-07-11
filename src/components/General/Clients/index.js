import React from "react";
import { Row, Col } from "react-flexbox-grid";

import {
  clientButtonText,
  clientBlockNameText
} from "../../../constants/general";
import SVGIcon from "../../../_common/SVGIcon";
import Button from "../../../_common/Button";

import "./style.scss";

const lang = "eng";

const Clients = () => (
  <Row center="xs" className="l-clients">
    <Col xs={12}>
      <Row center="xs">
        <Col>
          <h1>{clientBlockNameText[lang]}</h1>
        </Col>
      </Row>
      <Row className="l-clients__icons">
        <Col xs={12}>
          <div className="l-clients__icons-wrapper">
            <div className="l-clients__mts">
              <SVGIcon name="mts" />
            </div>
            <div className="l-clients__dme">
              <SVGIcon name="dme" />
            </div>
            <div className="l-clients__stone-hedge">
              <SVGIcon name="stone-hedge" />
            </div>
            <div className="l-clients__megafon">
              <SVGIcon name="megafon" />
            </div>
            <div className="l-clients__carl">
              <SVGIcon name="carl" />
            </div>
            <div className="l-clients__muztv">
              <SVGIcon name="muztv" />
            </div>
            <div className="l-clients__mgt">
              <SVGIcon name="mgt" />
            </div>
          </div>
        </Col>
      </Row>
      <Row center="xs">
        <Col className="l-services__button">
          <Button text={clientButtonText[lang]} />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Clients;
