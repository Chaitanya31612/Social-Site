import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";

const LandingContainer = lazy(() => import("../containers/LandingContainer"));
const NotFoundContainer = lazy(() => import("../containers/NotFoundContainer"));

// import { LandingContainer, NotFoundContainer } from '../containers'

const AppRouter = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingContainer} />
          <Route path='/404' exact component={NotFoundContainer} />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
