import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import General from "./General";
import "./App.scss";

function App() {
  return (
    <div className="wrap">
      <Grid>
        <Row>
          <Col xs={12}>
            <General />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
