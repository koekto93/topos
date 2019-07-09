import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ name }) => {
  if (!name) return null;
  return <img src={require(`../../images/${name}.svg`)} alt={`${name}Img`} />;
};

SVGIcon.propTypes = {
  name: PropTypes.string,
};

SVGIcon.defaultProps = {
  name: '',
};

export default SVGIcon;
