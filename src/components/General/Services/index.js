import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";

import "./style.scss";

const services = [
  {
    id: 1,
    category: "Product discovery",
    description:
      "We can help you with finding new opportunity for making business driven by customer needs."
  },
  {
    id: 2,
    category: "Rapid prototyping",
    description:
      "We can help you with finding new opportunity for making business driven by customer needs."
  },
  {
    id: 3,
    category: "User testing",
    description:
      "We can help you with finding new opportunity for making business driven by customer needs."
  },
  {
    id: 4,
    category: "Visual design and design systems",
    description:
      "We can help you with finding new opportunity for making business driven by customer needs."
  },
  {
    id: 5,
    category: "Development",
    description:
      "We can help you with finding new opportunity for making business driven by customer needs."
  },
  {
    id: 6,
    category: "Further product develpment",
    description:
      "We can help you with finding new opportunity for making business driven by customer needs."
  }
];

const Services = () => {
  const [selectedPoint, setPoint] = useState(null);
  const setNewPoint = event => {
    event.stopPropagation();
    console.log(event.target);
  };
  return (
    <Row center="xs" className="l-services">
      <Col xs={10}>
        <Row>
          <Col xs={12} md={6}>
            <div>
              <ul>
                {services.map((item, i) => (
                  <li key={i} onClick={setNewPoint} data-id={i}>
                    <div className="l-services__category display-flex _a-center ">
                      <span>{item.category}</span>
                    </div>
                    <div className="l-services__description _mobile">
                      <span>{item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xs={6}>
            <div className="l-services__description _big">
              <span>
                We can help you with finding new opportunity for making business
                driven by customer needs.
              </span>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Services;
