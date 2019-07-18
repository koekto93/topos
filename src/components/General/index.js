import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Row, Col } from "react-flexbox-grid";

import Header from "./Header";
import Services from "./Services";
import Clients from "./Clients";
import Points from "./Points";
import Footer from "./Footer";
import LangButton from "../../_common/LangButton";
import Callback from "../../_common/Dialogs/Callback";
import Success from "../../_common/Dialogs/Success";
import { getLang } from "../../selector/general";
import withModal from "../../_decorators/withModal";

import "./style.scss";

const General = ({ lang, onChangeSelectedModalName, selectedModalName }) => {
  return (
    <Row className="l-general l-app-content">
      <Col xs={12}>
        <LangButton />
        <Header lang={lang} />
        <div className="l-general__services-wrapper">
          <Services
            lang={lang}
            onChangeSelectedModalName={onChangeSelectedModalName}
          />
        </div>
        <div className="l-general__clients-wrapper">
          <Clients lang={lang} />
        </div>
        <div className="l-general__points-wrapper">
          <Points lang={lang} />
        </div>
        <div className="l-general__footer-wrapper">
          <Footer
            lang={lang}
            onChangeSelectedModalName={onChangeSelectedModalName}
          />
        </div>
        <Callback
          lang={lang}
          selectedModalName={selectedModalName}
          onChangeSelectedModalName={onChangeSelectedModalName}
          onClose={() => onChangeSelectedModalName(null)}
        />
        <Success
          lang={lang}
          selectedModalName={selectedModalName}
          onClose={() => onChangeSelectedModalName(null)}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  lang: getLang(state)
});

export default compose(
  connect(mapStateToProps),
  withModal
)(General);
