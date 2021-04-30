import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import FallbackLoading from "./components/fallbackLoading";

import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/notFound"));
const Profile = lazy(() => import("./pages/profile"));

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense
          fallback={
            <FallbackLoading />
          }
        >
          <Switch>
            <Route path={ROUTES.LOGIN} exact>
              {!user ? <Login /> : <Redirect to={ROUTES.DASHBOARD} />}
            </Route>
            <Route path={ROUTES.SIGN_UP} exact>
              {!user ? <SignUp /> : <Redirect to={ROUTES.DASHBOARD} />}
            </Route>
            <Route path={ROUTES.DASHBOARD} exact>
              {user ? <Dashboard /> : <Redirect to={ROUTES.LOGIN} />}
            </Route>
            <Route path={ROUTES.PROFILE} component={Profile} exact />
            <Route path={ROUTES.NOT_FOUND} component={NotFound} exact />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
