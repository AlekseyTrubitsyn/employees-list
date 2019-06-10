import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  mix: PropTypes.string,
  description: PropTypes.string,
  onOpenEmployeeEditor: PropTypes.func,
};

const defaultProps = {
  mix: '',
  description: null,
  onOpenEmployeeEditor: null
};

const Employee = (props) => {
  const {
    mix,
    id,
    name,
    surname,
    position,
    description,
    onOpenEmployeeEditor
  } = props;

  return (
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
      {onOpenEmployeeEditor && (
        <div className="employee__grid-row">
          <button
            className="btn btn-primary employee__edit-button"
            type="button"
            onClick={() => onOpenEmployeeEditor(id)}
            title={`Редактировать карточку сотдруника с ID ${id} (${name}, ${surname})`}
          >
            {'Редактировать'}
          </button>
        </div>
      )}
    </div>
  );
};

Employee.propTypes = propTypes;
Employee.defaultProps = defaultProps;
export default Employee;
