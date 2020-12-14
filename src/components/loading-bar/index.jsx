/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';

const LoadingBar = (props) => {
   const { className } = props;
   useEffect(() => {}, []);
   return (
      <Wrapper className={className}>
         <Grid container>
            <Grid item className="circle circle_1"></Grid>
            <Grid item className="circle circle_2"></Grid>
         </Grid>
      </Wrapper>
   );
};

export default LoadingBar;
