import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { UserContext } from "./context";
import Routes from "./Routes";

const GlobalStyle = createGlobalStyle`
  body {
    overflow:${(props) => `${props.overflow}`};
  }
`;

const App = () => {
  const { state } = useContext(UserContext);

  return (
    <>
      <GlobalStyle overflow={state.modalOverflow ? "hidden" : "visible"} />
      <Routes />
    </>
  );
};

export default App;
