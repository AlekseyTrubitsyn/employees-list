import {
  OPEN_EMPLOYEE_EDITOR,
  CLOSE_EMPLOYEE_EDITOR,
  EDIT_EMPLOYEE_DATA
} from '../constants/action-types';

export const openEmployeeEditor = (id = -1) => ({
  type: OPEN_EMPLOYEE_EDITOR,
  id
});

export const closeEmployeeEditor = () => ({
  type: CLOSE_EMPLOYEE_EDITOR
});

export const editEmployee = payload => ({
  type: EDIT_EMPLOYEE_DATA,
  payload
});
