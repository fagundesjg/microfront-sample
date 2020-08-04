import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Users } from 'pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/users" component={Users} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export { Routes };
