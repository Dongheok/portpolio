import React, { useContext, useRef } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { UserContext } from './context';
import Routes from './Routes';
import { darkTheme, theme } from './theme';
import LoadingBar from './components/loading-bar';

const GlobalStyle = createGlobalStyle`
  body {
    overflow:${(props) => `${props.overflow}`};
    background:${(props) => `${props.theme.bg}`};
  }
`;

const App = () => {
   const { state } = useContext(UserContext);
   return (
      <ThemeProvider theme={state.modeDark ? darkTheme : theme}>
         {state.isLoading && <LoadingBar className={state.isLoading && 'on'} />}

         <GlobalStyle overflow={state.isLoading ? 'hidden' : 'visible'} />
         <Routes />
      </ThemeProvider>
   );
};

export default App;
