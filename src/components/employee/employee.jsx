import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  mix: PropTypes.string,
  description: PropTypes.string,
};

const defaultProps = {
  mix: '',
  description: null
};

const Employee = ({ mix, name, surname, position, description }) => (
  <div className={`${mix} employee`.trim()}>
    <span className="employee__grid-cell employee__grid-cell_key">
      {'Имя'}
    </span>
    <span className="employee__grid-cell employee__grid-cell_value">
      {name}
    </span>
    <span className="employee__grid-cell employee__grid-cell_key">
      {'Фамилия'}
    </span>
    <span className="employee__grid-cell employee__grid-cell_value">
      {surname}
    </span>
    <span className="employee__grid-cell employee__grid-cell_key">
      {'Должность'}
    </span>
    <span className="employee__grid-cell employee__grid-cell_value">
      {position}
    </span>
    {(typeof description === 'string') && (
      <Fragment>
        <span className="employee__grid-cell employee__grid-cell_key">
          {'Описание'}
        </span>
        <span className="employee__grid-cell employee__grid-cell_value">
          {description}
        </span>
      </Fragment>
    )}
  </div>
);

Employee.propTypes = propTypes;
Employee.defaultProps = defaultProps;
export default Employee;
