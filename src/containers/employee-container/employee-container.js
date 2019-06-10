import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import _isEmpty from 'lodash/isEmpty';

import Employee from '../../components/employee';
import EmployeeErrorMessage from '../../components/employee-error-message';

const propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
};

const defaultProps = {
  employee: null
};

const EmployeeContainer = ({ employee }) => (
  _isEmpty(employee)
    ? (
      <EmployeeErrorMessage />
    ) : (
      <Employee {...employee} />
    )
);

const mapStateToProps = ({ employees }, { id }) => {
  const employee = employees.find(item => item.id === id);

  return ({ employee });
};

EmployeeContainer.propTypes = propTypes;
EmployeeContainer.defaultProps = defaultProps;
export default connect(mapStateToProps)(EmployeeContainer);
