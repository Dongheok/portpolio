/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';

const LoadingBar = (props) => {
    const { className } = props;
    return (
        <Wrapper className={className}>
            <Grid container>
                <Grid item className="circle circle_1" />
                <Grid item className="circle circle_2" />
            </Grid>
        </Wrapper>
    );
};

export default LoadingBar;
