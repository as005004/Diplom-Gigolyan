
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Routes from './routes/appRoutes'
import storage from './helpers/localStorage';


function App() {
  const isAdmin = storage.getItem('isAdmin') === 'true' || false

  return (
    <div className="App">
      <Router>
      <Switch>
      {Routes.map(route => {
        if (route.redirect) {
          return <Redirect from={route.path} to={route.pathTo} />
        }

        if(!isAdmin && route.adminOnly) {
          return ''
        }

        return (
          <Route path={route.path}>
            <route.layout adminOnly={route.adminOnly}>
              {route.component}
            </route.layout>
          </Route>
        )
      })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
