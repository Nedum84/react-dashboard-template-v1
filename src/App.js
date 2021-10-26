import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ROUTES from "./routes/Routes";
import AppLayout from "./applayout/AppLayout";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Switch>
          {Object.values(ROUTES).map(({ component: Component, ...rest }) => {
            const AuthComponent = () => (
              <AppLayout>
                <Component />
              </AppLayout>
            );

            return (
              <Route {...rest}>
                {rest.isPrivate ? AuthComponent : <Component />}
              </Route>
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
