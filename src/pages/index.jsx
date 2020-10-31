/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';

import { useHistory } from 'react-router';

const Portpolio = () => {
   const history = useHistory();
   return (
      <Wrapper>
         <Grid className="main">
            <Grid className="info">
               <h2>PORTPOLIO</h2>
               <Grid>
                  <button
                     className="btn_profile"
                     onClick={() => {
                        history.push('/profile');
                     }}
                  >
                     Profile
                  </button>
                  <button
                     className="btn_project"
                     onClick={() => {
                        history.push('/project');
                     }}
                  >
                     Project
                  </button>
               </Grid>
            </Grid>
         </Grid>
      </Wrapper>
   );
};

export default Portpolio;
