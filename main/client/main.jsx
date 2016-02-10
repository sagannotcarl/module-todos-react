import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { AppContainer } from '../../imports/containers/App.jsx';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/lists/:id" component={() => <div>hi</div>}/>
      </Route>
    </Router>
  ), document.getElementById('app'));
});
