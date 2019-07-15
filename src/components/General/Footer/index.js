import React from "react";
import { Row, Col } from "react-flexbox-grid";

import SVGIcon from "../../../_common/SVGIcon";
import Button from "../../../_common/Button";
import {
  footerBlockNameText,
  footerAddressBlock,
  serviceButtonText
} from "../../../constants/general";

import "./style.scss";

const Footer = ({ lang, onChangeSelectedModalName }) => {
  const handleClick = event => {
    event.stopPropagation();
    onChangeSelectedModalName("callbackModal");
  };
  return (
    <Row center="xs" className="l-footer">
      <Col xs={12}>
        <div className="l-footer__gradient-block" />
        <Row center="xs">
          <Col xs={11}>
            <div className="l-footer__title">{footerBlockNameText[lang]}</div>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={11}>
            <Row className="l-footer__blocks-wrapper" center="xs">
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={12}>
                    <div className="l-footer__mail display-flex _a-center">
                      <div className="l-footer__mail-wrapper">
                        <SVGIcon name="mail" />
                      </div>
                      <div className="l-footer__icon-label">
                        <a href="mailto:hello@topos.studio">
                          hello@topos.studio
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="display-flex _a-center">
                      <div className="l-footer__locate-wrapper">
                        <SVGIcon name="locate" />
                      </div>
                      <div className="l-footer__icon-label">
                        <span>{footerAddressBlock[lang]}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row end="md">
                  <Col xs={12} className="l-footer__button ">
                    <Button
                      text={serviceButtonText[lang]}
                      handleClick={handleClick}
                    />
                  </Col>
                  <Col xs={12} className="l-footer__logo-wrapper ">
                    <div className="display-flex _a-end">
                      <div className="l-footer__logo" />
                      <div className="l-footer__logo-label">
                        <span>Founded in 2015 </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
