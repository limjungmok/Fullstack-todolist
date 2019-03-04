import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoListPage from '../pages/TodoListPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TodoListPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Routes;