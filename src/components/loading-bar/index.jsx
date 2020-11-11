/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';

import Wrapper from './styles';
import { UserContext } from '../../context';

const LoadingBar = (props) => {
   const { className } = props;
   const loadingRef = useRef();

   return (
      <Wrapper ref={loadingRef} className={className}>
         <svg className="loading_circle">
            <circle cx="50%" cy="50%" r="25"></circle>
         </svg>
      </Wrapper>
   );
};

export default LoadingBar;
