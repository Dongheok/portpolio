import React, { useContext, useMemo } from 'react';
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

    const themeMode = useMemo(() => {
        if (state.modeDark) {
            return darkTheme;
        }
        return theme;
    }, [state.modeDark]);

    const isLoading = useMemo(() => {
        if (state.isLoading) {
            return 'on';
        }
        return '';
    }, [state.isLoading]);

    const isOverflow = useMemo(() => {
        if (state.isLoading) {
            return 'hidden';
        }
        return 'visible';
    }, [state.isLoading]);

    return (
        <ThemeProvider theme={themeMode}>
            {/* 로딩바 */}
            <LoadingBar className={isLoading} />
            {/* 전역 css 접근 */}
            <GlobalStyle overflow={isOverflow} />
            {/* 라우트 */}
            <Routes />
        </ThemeProvider>
    );
};

export default App;
