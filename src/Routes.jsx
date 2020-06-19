import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Portpolio from './page';
import ProjectSection from './page/project/';
import ProfileSection from './page/profile/';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Portpolio} />
                <Route path="/project" exact component={ProjectSection} />
                <Route path="/profile" exact component={ProfileSection} />

                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
