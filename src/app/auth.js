import React, { Suspense } from "react";
import Loader from "components/Loader/Loader";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "routes/Routes";
import AppLayout from "applayout/AppLayout";

function AuthApp() {
  const privateRoutes = Object.values(ROUTES).filter(
    (route) => route.isPrivate === true
  );

  return (
    <Suspense fallback={<Loader />}>
      <AppLayout>
        <Router>
          <Switch>
            {privateRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              );
            })}
          </Switch>
        </Router>
      </AppLayout>
    </Suspense>
  );
}

export default AuthApp;
