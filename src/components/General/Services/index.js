import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";

import "./style.scss";

const lang = "eng";

const firstPartServices = [
  {
    id: "product-discovery",
    category: {
      ru: "Поиск новых возможностей",
      eng: "Product discovery"
    },
    description: {
      ru:
        "Помогаем вам найти новые возможности бизнеса решая потребности клиентов.",
      eng:
        "We can help you with finding new opportunity for making business driven by customer needs."
    },
    class: "_solid"
  },
  {
    id: "rapid-prototyping",
    category: {
      ru: "Быстрое прототипирование",
      eng: "Rapid prototyping"
    },
    description: {
      ru:
        "Экономим время и реализуем прототипы от идеи до готовой модели за 5 дней.",
      eng:
        "Save time and test your ideas as fast as 5 days from idea to first prototypes."
    },
    class: "_solid"
  },
  {
    id: "user-testing",
    category: {
      ru: "Пользовательское тестирование",
      eng: "User testing"
    },
    description: {
      ru:
        "Услышьте мнение будущих клиентов и убедитесь что вы все делаете правильно, или прислушайтесь к ним.",
      eng:
        "Get real future customers feedback on your product to insure that you are doing right things."
    },
    class: "_solid"
  }
];

const secondPartServices = [
  {
    id: "visual-design",
    category: {
      ru: "Графическое оформление и дизайн система",
      eng: "Visual design & design systems"
    },
    description: {
      ru: "Помогаем вашему продукты быть запоминающимся и удобным для клиента.",
      eng: "Make your product stand out from others and be customer friendly."
    },
    class: "_dashed"
  },
  {
    id: "design-supervision",
    category: {
      ru: "Дизайн надсмотр",
      eng: "Design supervision"
    },
    description: {
      ru:
        "Следим за тем, чтобы продукт был сделан в лучшем виде и попал к клиенту как можно быстрее.",
      eng:
        "We help you to make sure product will be development and delivered to customer in best way it should be."
    }
  }
];

const thirdPartServices = [
  {
    id: "development",
    category: {
      ru: "Разработка",
      eng: "Development"
    },
    description: {
      ru:
        "Сделаем так, чтобы ваш продукт оказался на экране пользователя и зарабатывал для вас.",
      eng: "We help you make your come to real hardware and earn you profit."
    },
    class: "_dashed"
  },
  {
    id: "further-product-development",
    category: {
      ru: "Дальнейшее развитие продукта",
      eng: "Further product development"
    },
    description: {
      ru:
        "Спланируем вместе с вами как сделать продукт еще лучше и закрыть больше потребностей клиента.",
      eng:
        "We help you plan further steps with making your product even better and solve more customer need than now."
    },
    class: "_dashed"
  }
];

function getAllDescriptions() {
  const resultData = [
    ...firstPartServices,
    ...secondPartServices,
    ...thirdPartServices
  ];
  console.log(resultData);
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
      <div className="l-services__category" onClick={setNewPoint}>
        <span data-name={item.id}>{item.category[lang]}</span>
      </div>
      <div className="l-services__description _mobile">
        <span>
          {selectedPoint === item.id
            ? allDescriptions[selectedPoint][lang]
            : ""}
        </span>
      </div>
    </div>
  ));
}

function getDoublePoints(items, setNewPoint, selectedPoint, lang) {
  return (
    <div className="l-double-points">
      <Row className="l-double-points__points-wrapper" between="xs">
        <Col
          className={`l-services__point ${items[0].class} _no-border`}
          xs={6}
        >
          <span className="l-services__list-style" />
          <div className="l-services__category" onClick={setNewPoint}>
            <span data-name={items[0].id}>{items[0].category[lang]}</span>
          </div>
        </Col>
        <Col xs={6} className="l-double-points__no-gutter">
          <div className="l-double-points__horizon-point-wrapper">
            <div className="l-double-points__horizon-point display-flex _a-center">
              <div className="l-double-points__horizon-line" />
              <span className="l-services__list-style" />
              <div
                className="l-services__category display-flex _a-center"
                onClick={setNewPoint}
              >
                <span data-name={items[1].id}>{items[1].category[lang]}</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="l-double-points__description _mobile">
            <span>
              {selectedPoint === items[0].id || selectedPoint === items[1].id
                ? allDescriptions[selectedPoint][lang]
                : ""}
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const Services = () => {
  const [selectedPoint, setPoint] = useState(null);
  const setNewPoint = event => {
    event.stopPropagation();
    setPoint(event.target.dataset.name);
  };
  return (
    <Row center="xs" className="l-services">
      <Col xs={10}>
        <Row>
          <Col xs={12} md={6}>
            <div>
              {getSimplePoints(
                firstPartServices,
                setNewPoint,
                selectedPoint,
                lang
              )}
            </div>
          </Col>
          <Col xs={6}>
            <div className="l-services__description _big">
              <span>
                {selectedPoint ? allDescriptions[selectedPoint][lang] : ""}
              </span>
            </div>
          </Col>
          <Col xs={12}>
            {getDoublePoints(
              secondPartServices,
              setNewPoint,
              selectedPoint,
              lang
            )}
          </Col>
          <Col xs={12} md={6}>
            <div className="l-services__last-points-block">
              {getSimplePoints(
                thirdPartServices,
                setNewPoint,
                selectedPoint,
                lang
              )}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Services;
