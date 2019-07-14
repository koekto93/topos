import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Button from '../../../_common/Button';

import {
  serviceButtonText,
  serviceBlockNameText,
  firstPartServices,
  secondPartServices,
  thirdPartServices,
} from '../../../constants/general';
import './style.scss';

function getAllDescriptions() {
  const resultData = [
    ...firstPartServices,
    ...secondPartServices,
    ...thirdPartServices,
  ];
  return resultData.reduce((sum, current) => {
    sum[current.id] = current.description;
    return sum;
  }, {});
}

const allDescriptions = getAllDescriptions();

function getSimplePoints(items, setNewPoint, selectedPoint, lang) {
  return items.map(item => (
    <div key={item.id} className={`l-services__point ${item.class}`}>
      <span className="l-services__list-style" />
      <div
        className={`l-services__category ${
          selectedPoint === item.id ? '_active' : ''
        }`}
        onClick={setNewPoint}
      >
        <span data-name={item.id}>{item.category[lang]}</span>
      </div>
      <div className="l-services__description _mobile">
        <span>
          {selectedPoint === item.id
            ? allDescriptions[selectedPoint][lang]
            : ''}
        </span>
      </div>
    </div>
  ));
}

function getDoublePoints(items, setNewPoint, selectedPoint, lang) {
  return (
    <div className="l-double-points">
      <Row className="l-double-points__points-wrapper" between="xs" top="xs">
        <Col
          className={`l-services__point ${items[0].class} _no-border`}
          xs={7}
          md={6}
        >
          <span className="l-services__list-style" />
          <div
            className={`l-services__category ${
              selectedPoint === items[0].id ? '_active' : ''
            }`}
            onClick={setNewPoint}
          >
            <span data-name={items[0].id}>{items[0].category[lang]}</span>
          </div>
        </Col>
        <Col xs={5} md={6} className="l-double-points__no-gutter">
          <div className="l-double-points__horizon-point-wrapper">
            <div className="l-double-points__horizon-point display-flex _a-center">
              <div className="l-double-points__horizon-line" />
              <span className="l-services__list-style" />
              <div
                className={`l-services__category display-flex _a-center ${
                  selectedPoint === items[1].id ? '_active' : ''
                }`}
                onClick={setNewPoint}
              >
                <span data-name={items[1].id}>{items[1].category[lang]}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <div className="l-double-points__description _mobile">
            <span>
              {selectedPoint === items[0].id || selectedPoint === items[1].id
                ? allDescriptions[selectedPoint][lang]
                : ''}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const Services = ({ lang, onChangeSelectedModalName }) => {
  const [selectedPoint, setPoint] = useState(null);
  const setNewPoint = event => {
    event.stopPropagation();
    setPoint(event.target.dataset.name);
  };

  const handleClick = event => {
    event.stopPropagation();
    onChangeSelectedModalName('callbackModal');
  };
  return (
    <Row center="xs" className="l-services">
      <Col xs={10}>
        <Row center="xs">
          <Col>
            <h1>{serviceBlockNameText[lang]}</h1>
          </Col>
        </Row>
        <Row className="l-services__points-wrapper">
          <Col xs={12} md={6}>
            <div>
              {getSimplePoints(
                firstPartServices,
                setNewPoint,
                selectedPoint,
                lang,
              )}
            </div>
          </Col>
          <Col xs={6}>
            <div className="l-services__description _big">
              <span>
                {selectedPoint ? allDescriptions[selectedPoint][lang] : ''}
              </span>
            </div>
          </Col>
          <Col xs={12} className="l-double-points__without-right-padding">
            {getDoublePoints(
              secondPartServices,
              setNewPoint,
              selectedPoint,
              lang,
            )}
          </Col>
          <Col xs={12} md={6}>
            <div className="l-services__last-points-block">
              {getSimplePoints(
                thirdPartServices,
                setNewPoint,
                selectedPoint,
                lang,
              )}
            </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col className="l-services__button">
            <Button text={serviceButtonText[lang]} handleClick={handleClick} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Services;
