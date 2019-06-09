import React from 'react';

import Page from '../page';

const EmployeePage = ({ match }) => (
  <Page
    mix="employee-page"
    title={`Данные сотрудника ID #${match.params.id}`}
    link={{
      href: '/',
      text: 'К списку'
    }}
  >
    <h2 className="main-page__temp-title">
      {`На этом месте будут данные сотрудника c ID #${match.params.id}`}
    </h2>
  </Page>
);

export default EmployeePage;
