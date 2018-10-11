import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <button onClick={props.clickCallback} className={props.propClass}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  clickCallback: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  propClass: PropTypes.string
};

export default Button;
