/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import Wrapper from "./styles";

const LoadingBar = (props) => {
  const { className } = props;
  useEffect(() => {}, []);
  return (
    <Wrapper className={className}>
      <svg className="loading_circle">
        <circle cx="50%" cy="50%" r="25"></circle>
      </svg>
    </Wrapper>
  );
};

export default LoadingBar;
