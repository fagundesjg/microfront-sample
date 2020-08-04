import React from 'react';
import { AppBar, SidebarOption } from 'clubpetro-npm/core/components';
import { Grid, Paper, Typography } from '@material-ui/core';

import { IAttendants } from './types';
import {} from './styles';

const AttendantsComponent = (props: IAttendants) => {
  return (
    <AppBar pagePath={SidebarOption.Attendants}>
      <Grid container>
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography color="primary">Página de Frentistas</Typography>
          </Paper>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const Attendants = AttendantsComponent;

export { Attendants };
