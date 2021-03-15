import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import getPatientData from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const PatientsView = () => {
  const classes = useStyles();
  const [patients] = useState(getPatientData());

  return (
    <Page
      className={classes.root}
      title="Patients"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Results patients={patients} />
        </Box>
      </Container>
    </Page>
  );
};

export default PatientsView;
