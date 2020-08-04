import React from 'react';
import { AppBar, SidebarOption } from 'clubpetro-npm/core/components';
import { Grid, Paper, Typography } from '@material-ui/core';

import { withUsers } from './withUsers';
import { IUsers } from './types';
import {} from './styles';

const UsersComponent = (props: IUsers) => {
  return (
    <AppBar pagePath={SidebarOption.Users}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Página de usuários</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Users = withUsers(UsersComponent);

export { Users };
