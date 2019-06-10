const initialState = {
  employees: [{
    id: '1',
    name: 'Ирина ',
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
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
