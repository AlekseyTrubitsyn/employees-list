import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';

import EmployeesList, { employeesListPropTypes } from '../../components/employees-list';

const EmployeesListContainer = ({ employees, onOpenEmployeeEditor }) => (
  <EmployeesList
    employees={employees}
    onOpenEmployeeEditor={onOpenEmployeeEditor}
  />
);

const mapStateToProps = ({ employees = [] }) => ({ employees });

const mapDispatchToProps = (dispatch) => {
  const bindedActions = bindActionCreators(Actions, dispatch);

  return {
    onOpenEmployeeEditor: bindedActions.openEmployeeEditor
  };
};

EmployeesListContainer.propTypes = employeesListPropTypes;
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesListContainer);
