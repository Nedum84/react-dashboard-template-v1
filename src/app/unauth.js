import React, { Suspense } from "react";
import Loader from "components/Loader/Loader";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "routes/Routes";

function UnAuthApp() {
  const publicRoutes = Object.values(ROUTES).filter(
    (route) => route.isPrivate !== true
  );

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {publicRoutes.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default UnAuthApp;
