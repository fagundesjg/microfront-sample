import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core';
import { AppBarProvider } from 'clubpetro-npm/core/contexts';

import { Routes } from 'routes';
import { theme, GlobalStyle } from 'clubpetro-npm/core/styles';

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppBarProvider>
          <GlobalStyle />
          <Routes />
        </AppBarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
