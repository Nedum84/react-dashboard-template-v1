import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "./routes/Routes";
import AppLayout from "./applayout/AppLayout";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

function App() {
  const privateRoutes = Object.values(ROUTES).filter(
    (route) => route.isPrivate === true
  );
  const publicRoutes = Object.values(ROUTES).filter(
    (route) => route.isPrivate !== true
  );

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        {/* Authenticated */}
        <Switch>
          <Route path="/p">
            <AppLayout>
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
            </AppLayout>
          </Route>
          {/* Un - Authenticated(Public) */}
          <Route path="/">
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
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
