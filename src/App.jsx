import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { UserContext } from 'context';
import { darkTheme, theme } from 'theme';
import LoadingBar from 'components/loading-bar';
import Routes from './Routes';

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
            {/* 로딩바 */}
            <LoadingBar className={state.isLoading ? 'on' : ''} />
            {/* 전역 css 접근 */}
            <GlobalStyle overflow={state.isLoading ? 'hidden' : 'visible'} />
            {/* 라우트 */}
            <Routes />
        </ThemeProvider>
    );
};

export default App;
