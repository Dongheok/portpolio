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
    <BrowserRouter basename="/portpolio">
      <Switch>
        <Route path="/" exact component={Portpolio} />
        <Route path="/project" component={Project} />
        <Route path="/profile" component={Profile} />

        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
