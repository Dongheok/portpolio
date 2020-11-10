import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import Portpolio from "./pages";
import Project from "./pages/project/";
import Profile from "./pages/profile/";

const Routes = () => {
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("popstate", function (event) {
      window.location.reload();
      window.scrollTo(0, 0);
    });
  }, [history]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portpolio/" exact component={Portpolio} />
        <Route path="/portpolio/project" exact component={Project} />
        <Route path="/portpolio/profile" exact component={Profile} />

        <Redirect path="*" to="/portpolio/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
