import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Portpolio from './page';

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Portpolio} />

                <Redirect path="*" to="/" />
            </Switch>
        </HashRouter>
    );
};

export default Routes;
