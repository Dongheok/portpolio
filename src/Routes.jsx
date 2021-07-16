import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Portpolio from 'pages';
import Project from 'pages/project/';
import Profile from 'pages/profile/';

const Routes = () => {
    const history = useHistory();

    useEffect(() => {
        // 앞으로가기,뒤로가기 감지
        window.addEventListener('popstate', () => {
            window.scrollTo(0, 0);
        });
    }, [history]);
    return (
        <BrowserRouter basename="/portpolio">
            <Switch>
                {/* 메인 */}
                <Route path="/" exact component={Portpolio} />
                {/* 프로젝트 */}
                <Route path="/project" exact component={Project} />
                {/* 프로필 */}
                <Route path="/profile" exact component={Profile} />

                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
