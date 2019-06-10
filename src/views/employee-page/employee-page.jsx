import React from 'react';
import PropTypes from 'prop-types';

import Page from '../page';
import EmployeeContainer from '../../containers/employee-container';

const propsTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const EmployeePage = ({ match }) => {
  const id = match.params.id;

  return (
    <Page
      mix="employee-page"
      title={`Данные сотрудника ID #${id}`}
      link={{
        href: '/',
        text: 'К списку'
      }}
    >
      <EmployeeContainer id={id} />
    </Page>
  );
}

EmployeePage.propsTypes = propsTypes;
export default EmployeePage;
