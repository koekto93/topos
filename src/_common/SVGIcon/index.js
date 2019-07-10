import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SVGIcon = ({ name }) => {
  if (!name) return null;
  return (
    <img
      className="c-svg-img"
      src={require(`../../images/${name}.svg`)}
      alt={`${name}Img`}
    />
  );
};

SVGIcon.propTypes = {
  name: PropTypes.string
};

SVGIcon.defaultProps = {
  name: ""
};

export default SVGIcon;
