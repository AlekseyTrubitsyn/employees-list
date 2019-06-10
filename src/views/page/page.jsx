import React from 'react';
import PropTypes from 'prop-types';

import ModalEditorContainer from '../../containers/modal-editor-container';

import PageWrapper from '../../components/page-wrapper';
import PageContent, { headerPropTypes } from '../../components/page-content';
import PageFooter from '../../components/page-footer';

const propTypes = {
  ...headerPropTypes,
  mix: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const defaultProps = {
  mix: '',
};

const Page = ({ mix, link, title, children }) => (
  <div className={`${mix} page`.trim()}>
    <ModalEditorContainer />
    <div className="page__content">
      <PageWrapper>
        <PageContent
          title={title}
          link={link}
        >
          {children}
        </PageContent>
      </PageWrapper>
    </div>
    <PageFooter />
  </div>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;
export default Page;
