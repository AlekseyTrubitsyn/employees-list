import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Employee from '../employee';

const propTypes = {
  mix: PropTypes.string,
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const defaultProps = {
  mix: ''
};

const EmployeesListMobile = ({ mix, employees }) => (
  <ul className={`${mix} employees-list-mobile`.trim()}>
    {employees.map(({ id, name, surname, position }) => (
      <li
        className="employees-list-mobile__item employees-list-item"
        key={id}
      >
        <Link
          to={`/employee/${id}`}
          className="employees-list-item__link"
          title={`Открыть карточку сотрудника с ID ${id} (${surname} ${name})`}
        >
          <span className="visually-hidden">
            {'Подробней'}
          </span>
        </Link>
        <Employee
          mix="employees-list-item__grid"
          id={id}
          name={name}
          surname={surname}
          position={position}
        />
      </li>
    ))}
  </ul>
);

EmployeesListMobile.propTypes = propTypes;
EmployeesListMobile.defaultProps = defaultProps;
export default EmployeesListMobile;
