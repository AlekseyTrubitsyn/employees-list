import {
  OPEN_EMPLOYEE_EDITOR,
  CLOSE_EMPLOYEE_EDITOR,
  EDIT_EMPLOYEE_DATA
} from '../constants/action-types';

const savedData = localStorage.getItem('employees');

const initialState = {
  employees: savedData ? JSON.parse(savedData) : [{
    id: '1',
    name: 'Ирина',
    surname: 'Сердюковская',
    position: 'Маркетолог',
    description: 'Как анализировать конкурентов',
  }, {
    id: '2',
    name: 'Игорь ',
    surname: 'Шеньшин',
    position: 'Маркетолог',
    description: '5 способов заработать на рекламе в Facebook',
  }, {
    id: '3',
    name: 'Леонид ',
    surname: 'Никулин',
    position: 'UX/UX дизайнер',
    description: 'Основы мобильного дизайна в Figma',
  }, {
    id: '4',
    name: 'Ильназ',
    surname: 'Гильязов',
    position: 'Front-end разработчик',
    description: 'Автор курсов',
  }, {
    id: '5',
    name: 'Татьяна ',
    surname: 'Тен',
    position: 'Front-end разработчик',
    description: 'Преподаватель курсов',
  }],
  showEditor: false,
  employeeToEdit: -1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_EMPLOYEE_EDITOR:
      return {
        ...state,
        showEditor: true,
        employeeToEdit: action.id
      };

    case CLOSE_EMPLOYEE_EDITOR:
      return {
        ...state,
        showEditor: false,
      };

    case EDIT_EMPLOYEE_DATA:
      return {
        ...state,
        showEditor: false,
        employees: (() => {
          const {
            employees,
            employeeToEdit: id
          } = state;

          const { payload } = action;

          let newEmployees;

          if (id === -1) {
            const nextId = Math.max(...employees.map(item => +item.id)) + 1;

            newEmployees = employees.concat({
              ...payload,
              id: String(nextId)
            });
          } else {
            newEmployees = employees.map(item => (
              (item.id !== id)
                ? item
                : ({ ...payload, id })
            ));
          }

          localStorage.setItem('employees', JSON.stringify(newEmployees));

          return newEmployees;
        })()
      };

    default:
      return state;
  }
};
