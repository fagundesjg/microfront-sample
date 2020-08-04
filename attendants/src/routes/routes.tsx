import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Attendants } from 'pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/attendants" component={Attendants} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export { Routes };
