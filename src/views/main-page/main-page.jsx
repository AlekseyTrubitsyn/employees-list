import React from 'react';

import Page from '../page';
import EmployeesListContainer from '../../containers/employees-list-container';

const MainPage = () => (
  <Page
    mix="main-page"
    title="Список сотрудников"
  >
    <EmployeesListContainer />
  </Page>
);

export default MainPage;
