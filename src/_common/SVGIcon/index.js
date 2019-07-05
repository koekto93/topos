import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SVGIcon = ({ name }) => {
  if (!name) return null;
  return (
    <div className="c-svg-icon">
      <img src={require(`../../images/img/${name}.svg`)} alt={`${name}Img`} />
    </div>
  );
};

SVGIcon.propTypes = {
  name: PropTypes.string
};

SVGIcon.defaultProps = {
  name: ""
};

export default SVGIcon;
