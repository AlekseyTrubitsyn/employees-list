import React from 'react';

import { connect } from 'react-redux';
import EmployeesList, { employeesListPropTypes } from '../../components/employees-list';

const EmployeesListContainer = ({ employees }) => (
  <EmployeesList
    employees={employees}
  />
);

const mapStateToProps = ({ employees = [] }) => ({ employees });

EmployeesListContainer.propTypes = employeesListPropTypes;
export default connect(mapStateToProps)(EmployeesListContainer);
