import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import EmployeesListTable from '../employees-list-table';
import EmployeesListMobile from '../employees-list-mobile';

export const employeesListPropTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onOpenEmployeeEditor: PropTypes.func.isRequired,
};

const propTypes = {
  ...employeesListPropTypes,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const EmployeesList = (props) => {
  const {
    employees,
    history,
    onOpenEmployeeEditor
  } = props;

  const handleEmployeeClick = (id) => {
    history.push(`/employee/${id}`);
  };

  return (
    <div className="employees-list">
      <div className="employees-list__header employees-list-header">
        <p className="employees-list-header__message">
          {(!employees.length
            ? 'Список пуст. Создать первого сотрудника?'
            : `Сотрудников: ${employees.length}`
          )}
        </p>
        <button
          title="Создать нового сотрудника"
          type="button"
          className="btn btn-primary employees-list-header__create-button"
          onClick={() => onOpenEmployeeEditor(-1)}
        >
          {'Добавить'}
        </button>
      </div>
      {(window.innerWidth < 768
        ? (
          <EmployeesListMobile
            mix="employees-list__table"
            employees={employees}
            onEmployeeClick={handleEmployeeClick}
          />
        )
        : (
          <EmployeesListTable
            mix="employees-list__table"
            employees={employees}
            onEmployeeClick={handleEmployeeClick}
          />
        ))
      }
    </div>
  );
};

EmployeesList.propTypes = propTypes;
export default withRouter(EmployeesList);
