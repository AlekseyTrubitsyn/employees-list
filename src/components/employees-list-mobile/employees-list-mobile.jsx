import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <div className="employees-list-item__grid employees-list-item-grid">
          <span className="employees-list-item-grid__cell employees-list-item-grid__cell_key">
            {'Имя'}
          </span>
          <span className="employees-list-item-grid__cell employees-list-item-grid__cell_value">
            {name}
          </span>
          <span className="employees-list-item-grid__cell employees-list-item-grid__cell_key">
            {'Фамилия'}
          </span>
          <span className="employees-list-item-grid__cell employees-list-item-grid__cell_value">
            {surname}
          </span>
          <span className="employees-list-item-grid__cell employees-list-item-grid__cell_key">
            {'Должность'}
          </span>
          <span className="employees-list-item-grid__cell employees-list-item-grid__cell_value">
            {position}
          </span>
        </div>
      </li>
    ))}
  </ul>
);

EmployeesListMobile.propTypes = propTypes;
EmployeesListMobile.defaultProps = defaultProps;
export default EmployeesListMobile;
