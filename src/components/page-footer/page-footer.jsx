import React from 'react';
import PropTypes from 'prop-types';

import PageWrapper from '../page-wrapper';

const propTypes = {
  mix: PropTypes.string,
};

const defaultProps = {
  mix: ''
};

const PageFooter = ({ mix }) => (
  <footer className={`${mix} page-footer`.trim()}>
    <PageWrapper>
      <p className="page-footer__text">
        {`\u00A9 Алексей Трубицын | ${(new Date()).getFullYear()}`}
      </p>
    </PageWrapper>
  </footer>
);

PageFooter.propTypes = propTypes;
PageFooter.defaultProps = defaultProps;
export default PageFooter;
