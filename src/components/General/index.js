import React from "react";
import { Row, Col } from "react-flexbox-grid";

import Header from "./Header";
import Services from "./Services";
import LangButton from "../../_common/LangButton";

const General = () => (
  <Row>
    <Col xs={12}>
      <LangButton />
      <Header />
      <Services />
    </Col>
  </Row>
);

export default General;
