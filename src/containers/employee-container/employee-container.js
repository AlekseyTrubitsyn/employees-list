import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import _isEmpty from 'lodash/isEmpty';

import * as Actions from '../../actions';

import Employee from '../../components/employee';
import EmployeeErrorMessage from '../../components/employee-error-message';

const propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onOpenEmployeeEditor: PropTypes.func.isRequired,
};

const defaultProps = {
  employee: null
};

const EmployeeContainer = ({ employee, onOpenEmployeeEditor }) => (
  _isEmpty(employee)
    ? (
      <EmployeeErrorMessage />
    ) : (
      <Employee
        {...employee}
        onOpenEmployeeEditor={onOpenEmployeeEditor}
      />
    )
);

const mapStateToProps = ({ employees }, { id }) => {
  const employee = employees.find(item => item.id === id);

  return ({ employee });
};

const mapDispatchToProps = (dispatch) => {
  const { openEmployeeEditor } = bindActionCreators(Actions, dispatch);

  return {
    onOpenEmployeeEditor: openEmployeeEditor
  };
};

EmployeeContainer.propTypes = propTypes;
EmployeeContainer.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
