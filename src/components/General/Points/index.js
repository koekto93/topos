import React from "react";
import { Row, Col } from "react-flexbox-grid";

import {
  pointsBlockNameText,
  pointBlockText
} from "../../../constants/general";

import "./style.scss";

const lang = "eng";

function getTexts(texts, lang) {
  return texts.map(item => (
    <div className="l-points__text-block">
      <div className="l-points__gradient-block" />
      <div className="l-points__text">
        <span>{item[lang]}</span>
      </div>
    </div>
  ));
}

const Points = () => (
  <Row center="xs" className="l-points">
    <Col xs={12}>
      <Row center="xs">
        <Col>
          <h1>{pointsBlockNameText[lang]}</h1>
        </Col>
      </Row>
      <Row className="l-points__blocks-wrapper" center="xs">
        <Col xs={11}>{getTexts(pointBlockText, lang)}</Col>
      </Row>
    </Col>
  </Row>
);

export default Points;
