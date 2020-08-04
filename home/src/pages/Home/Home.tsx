import React from 'react';
import { AppBar, SidebarOption } from 'clubpetro-npm/core/components';
import { Grid, Paper, Typography } from '@material-ui/core';

import { IHome } from './types';
import {} from './styles';

const HomeComponent = (props: IHome) => {
  return (
    <AppBar pagePath={SidebarOption.Home}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Página Inicial</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Home = HomeComponent;

export { Home };
