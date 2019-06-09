import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const PageWrapper = ({ children }) => (
  <div className="page-wrapper">
    {children}
  </div>
);

PageWrapper.propTypes = propTypes;
export default PageWrapper;
