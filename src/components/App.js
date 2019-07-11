import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import General from './General';
//import SVGIcon from '../_common/SVGIcon';
import './App.scss';

function App() {
  return (
    <Grid className="wrap">
      <Row>
        <Col xs={12}>
          <General />
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
