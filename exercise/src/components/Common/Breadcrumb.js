import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = props => {
  let createElem = elem => (
    <li class="breadcrumb-item">
      <Link to={elem.path}>{elem.label}</Link>
    </li>
  );

  return (
    <ol className="breadcrumb">{props.pages.map(elem => createElem(elem))}</ol>
  );
};

Breadcrumb.propTypes = {
  pages: PropTypes.array.isRequired
};

export default Breadcrumb;
