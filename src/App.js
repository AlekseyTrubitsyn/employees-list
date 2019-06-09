import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './views/main-page';
import EmployeePage from './views/employee-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/employee/:id" component={EmployeePage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
