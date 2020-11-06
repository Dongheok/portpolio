import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { UserContext } from './context';
import Routes from './Routes';
import { dangunTheme, darkTheme, theme } from './theme';

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
         <GlobalStyle overflow={state.modalOverflow ? 'hidden' : 'visible'} />
         <Routes />
      </ThemeProvider>
   );
};

export default App;
