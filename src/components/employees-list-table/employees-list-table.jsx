import React from 'react';
import PropTypes from 'prop-types';

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
  onEmployeeClick: PropTypes.func.isRequired,
};

const defaultProps = {
  mix: ''
};

const EmployeesListTable = ({ mix, employees, onEmployeeClick }) => (
  <table className={`${mix} employees-list-table`.trim()}>
    <thead className="employees-list-table__head">
      <tr className="employees-list-table__row employees-list-table__row_thead">
        <th className="employees-list-table__cell employees-list-table__cell_thead">
          {'Имя'}
        </th>
        <th className="employees-list-table__cell employees-list-table__cell_thead">
          {'Фамилия'}
        </th>
        <th className="employees-list-table__cell employees-list-table__cell_thead">
          {'Должность'}
        </th>
      </tr>
    </thead>
    <tbody className="employees-list-table__tbody">
      {employees.map(({ id, name, surname, position }) => (
        <tr
          key={id}
          title={`Открыть карточку сотрудника с ID ${id} (${surname} ${name})`}
          className="employees-list-table__row"
          onClick={() => onEmployeeClick(id)}
          tabIndex={0}
          onKeyUp={e => (e.keyCode === 13 ? onEmployeeClick(id) : null)}
        >
          <td className="employees-list-table__cell">
            {name}
          </td>
          <td className="employees-list-table__cell">
            {surname}
          </td>
          <td className="employees-list-table__cell">
            {position}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

EmployeesListTable.propTypes = propTypes;
EmployeesListTable.defaultProps = defaultProps;
export default EmployeesListTable;
