import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app/app.component';
import Asteroids from './components/asteroids/asteroids.component';
import About from './components/about/about.component';
import NotFound from './components/not-found/not-found.component';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Asteroids} />
      <Route path="/asteroids" component={Asteroids} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;