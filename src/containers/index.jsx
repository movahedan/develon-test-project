import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loading } from 'components';
import { routes } from 'utils';

export const Containers = () => (
  <React.Suspense fallback={<Loading />}>
    <Switch>
      {Object.values(routes).map((route) => (
        <Route
          key={route.path()}
          exact={route.exact}
          path={route.path()}
          render={route.render}
        />
      ))}
    </Switch>
  </React.Suspense>
);
