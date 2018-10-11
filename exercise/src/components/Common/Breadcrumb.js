import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = props => {
  let createElem = (elem, index) => (
    <li key={index} className="breadcrumb-item">
      <Link to={elem.path}>{elem.label}</Link>
    </li>
  );

  return (
    <ol className="breadcrumb">{props.pages.map((elem, index) => createElem(elem, index))}</ol>
  );
};

Breadcrumb.propTypes = {
  pages: PropTypes.array.isRequired
};

export default Breadcrumb;
