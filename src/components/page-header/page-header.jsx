import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const pageHeaderPropTypes = {
  title: PropTypes.string,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })
};

const propTypes = {
  ...pageHeaderPropTypes,
  mix: PropTypes.string,
};

const defaultProps = {
  mix: '',
  title: 'Список сотрудников' // eslint-disable-line react/default-props-match-prop-types
};

const PageHeader = ({ mix, link, title }) => (
  <header className={`${mix} page-header`}>
    {link && (
      <Link
        className="btn btn-primary page-header__link"
        to={link.href}
        title={link.text}
      >
        <FontAwesomeIcon
          className="btn__icon"
          icon={faChevronLeft}
        />
        <span className="btn__text">
          {link.text}
        </span>
      </Link>
    )}
    <h1 className="page-header__title">
      {title}
    </h1>
  </header>
);

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
export default PageHeader;
