import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './style.scss';

const lang = 'eng';

const firstPartServices = [
  {
    id: 1,
    category: {
      ru: 'Поиск новых возможностей',
      eng: 'Product discovery',
    },
    description: {
      ru:
        'Помогаем вам найти новые возможности бизнеса решая потребности клиентов.',
      eng:
        'We can help you with finding new opportunity for making business driven by customer needs.',
    },
  },
  {
    id: 2,
    category: {
      ru: 'Быстрое прототипирование',
      eng: 'Rapid prototyping',
    },
    description: {
      ru:
        'Экономим время и реализуем прототипы от идеи до готовой модели за 5 дней.',
      eng:
        'Save time and test your ideas as fast as 5 days from idea to first prototypes.',
    },
  },
  {
    id: 3,
    category: {
      ru: 'Пользовательское тестирование',
      eng: 'User testing',
    },
    description: {
      ru:
        'Услышьте мнение будущих клиентов и убедитесь что вы все делаете правильно, или прислушайтесь к ним.',
      eng:
        'Get real future customers feedback on your product to insure that you are doing right things.',
    },
  },
];

const secondPartServices = [
  {
    id: 4,
    category: {
      ru: 'Графическое оформление и дизайн система',
      eng: 'Visual design & design systems',
    },
    description: {
      ru: 'Помогаем вашему продукты быть запоминающимся и удобным для клиента.',
      eng: 'Make your product stand out from others and be customer friendly.',
    },
  },
  {
    id: 55,
    category: {
      ru: 'Дизайн надсмотр',
      eng: 'Design supervision',
    },
    description: {
      ru:
        'Следим за тем, чтобы продукт был сделан в лучшем виде и попал к клиенту как можно быстрее.',
      eng:
        'We help you to make sure product will be development and delivered to customer in best way it should be.',
    },
  },
];

const thirdPartServices = [
  {
    id: 5,
    category: {
      ru: 'Разработка',
      eng: 'Development',
    },
    description: {
      ru:
        'Сделаем так, чтобы ваш продукт оказался на экране пользователя и зарабатывал для вас.',
      eng: 'We help you make your come to real hardware and earn you profit.',
    },
  },
  {
    id: 6,
    category: {
      ru: 'Дальнейшее развитие продукта',
      eng: 'Further product develpment',
    },
    description: {
      ru:
        'Спланируем вместе с вами как сделать продукт еще лучше и закрыть больше потребностей клиента.',
      eng:
        'We help you plan further steps with making your product even better and solve more customer need than now.',
    },
  },
];

function getSimplePoints(items, setNewPoint) {
  return items.map((item, i) => (
    <div key={i} className="l-services__point">
      <span className="l-services__list-style" />
      <div
        className="l-services__category display-flex _a-center"
        onClick={setNewPoint}
      >
        <span>{item.category[lang]}</span>
      </div>
      <div className="l-services__description _mobile">
        <span>{item.description[lang]}</span>
      </div>
    </div>
  ));
}

function getDoublePoints(items, setNewPoint) {
  return (
    <div className="l-double-points">
      <div className="l-double-points__points-wrapper">
        <div className="l-services__point">
          <span className="l-services__list-style" />
          <div
            className="l-services__category display-flex _a-center"
            onClick={setNewPoint}
          >
            <span>{items[0].category[lang]}</span>
          </div>
          <div className="l-services__description _mobile">
            <span>{items[0].description[lang]}</span>
          </div>
        </div>

        <div className="l-services__horizon-point-wrapper">
          <div className="l-services__horizon-point display-flex _a-center">
            <div className="l-services__horizon-line" />
            <span className="l-services__list-style" />
            <div
              className="l-services__category display-flex _a-center"
              onClick={setNewPoint}
            >
              <span>{items[1].category[lang]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
              {getSimplePoints(firstPartServices)}
              {getDoublePoints(secondPartServices)}
              {getSimplePoints(thirdPartServices)}
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
