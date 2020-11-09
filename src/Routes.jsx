import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Portpolio from './pages';
import Project from './pages/project/';
import Profile from './pages/profile/';

const Routes = () => {
   const history = useHistory();

   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Portpolio} />
            <Route path="/project" exact component={Project} />
            <Route path="/profile" exact component={Profile} />

            {/* <Redirect path="*" to="/" exact /> */}
         </Switch>
      </BrowserRouter>
   );
};

export default Routes;
