import React from 'react';

import Page from '../page';

const EmployeePage = () => (
  <Page
    mix="employee-page"
    title="Данные сотрудника"
    link={{
      href: '/',
      text: 'К списку'
    }}
  >
    <h2 className="main-page__temp-title">
      {'На этом месте будут данные сотрудника'}
    </h2>
  </Page>
);

export default EmployeePage;
