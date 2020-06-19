import React from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Layout = ({ children }) => {
    const state = useSelector((state) => state.common);
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Grid className="Header">
                <span className="Logo">로고</span>
            </Grid>
            {children}
            <Grid className={state.pageKey === 'project' ? 'Pagination On' : 'Pagination '}>
                <ul>
                    {state.data.map((x, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {
                                    dispatch({
                                        type: 'MOVE_PAGE',
                                        input: {
                                            pageKey: `${x.value}`,
                                        },
                                    });
                                    history.push(x.key);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <span className={x.value === state.pageKey ? 'On' : ''}></span>
                            </li>
                        );
                    })}
                </ul>
            </Grid>
        </Wrapper>
    );
};

export default Layout;
