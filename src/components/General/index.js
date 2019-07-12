import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";

import Header from "./Header";
import Services from "./Services";
import Clients from "./Clients";
import Points from "./Points";
import Footer from "./Footer";
import LangButton from "../../_common/LangButton";
import { getLang } from "../../selector/general";

import "./style.scss";

const General = ({ lang }) => {
  return (
    <Row className="l-general l-app-content">
      <Col xs={12}>
        <LangButton />
        <Header lang={lang} />
        <div className="l-general__services-wrapper">
          <Services lang={lang} />
        </div>
        <div className="l-general__clients-wrapper">
          <Clients lang={lang} />
        </div>
        <div className="l-general__points-wrapper">
          <Points lang={lang} />
        </div>
        <div className="l-general__footer-wrapper">
          <Footer lang={lang} />
        </div>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  lang: getLang(state)
});

export default connect(mapStateToProps)(General);
