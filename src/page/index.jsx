import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import Layout from '../layout';

import { useSelector, useDispatch } from 'react-redux';

const Portpolio = () => {
    const state = useSelector((state) => state.common);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'CURRENT_PAGE',
            input: {
                pageKey: '',
            },
        });
    }, [dispatch]);
    return (
        <Wrapper>
            <Layout>
                {state.isLoading === true && (
                    <Grid className="Loading_Bar">
                        <Grid></Grid>
                    </Grid>
                )}
                <Grid container alignItems="center" className="Main">
                    <Grid className="Title">PORTPOLIO</Grid>
                </Grid>
            </Layout>
        </Wrapper>
    );
};

export default Portpolio;
