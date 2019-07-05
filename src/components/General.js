import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import LangButton from "../_common/LangButton";

const General = () => (
  <Grid fluid>
    <Row>
      <Col xs={6} md={3}>
        Hello, world!
        <LangButton />
      </Col>
    </Row>
  </Grid>
);

export default General;
