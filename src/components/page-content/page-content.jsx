import React from 'react';
import PropTypes from 'prop-types';

import PageHeader, { pageHeaderPropTypes } from '../page-header';

export const headerPropTypes = pageHeaderPropTypes;

const propTypes = {
  ...headerPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const defaultProps = {};

const PageContent = ({ title, link, children }) => (
  <div className="page-content">
    <PageHeader
      mix="page-content__header"
      title={title}
      link={link}
    />
    <div className="page-content__main">
      {children}
    </div>
  </div>
);

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;
export default PageContent;
