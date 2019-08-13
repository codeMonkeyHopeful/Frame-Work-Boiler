import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Home from './Home'

const AppRouter = props => {
    return (
      <div id="main-container">
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </div>
    );
  };
  
  const mapDispatch = dispatch => ({
  });

  export default connect(
    null,
    mapDispatch
  )(AppRouter);