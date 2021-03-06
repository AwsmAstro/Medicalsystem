import React from 'react';

import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import SimpleTabs from './form';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const MedicalForm = () => {
  const classes = useStyles();

  const [doctor, setDoctor] = React.useState('');
  const [patient, setPatient] = React.useState('');

  const readDoctorQR = (data) => {
    console.log(`Doctor: ${data}`);
    setDoctor(data);
  };

  const readPatientQR = (data) => {
    console.log(`Patient: ${data}`);
    setPatient(data);
  };

  return (
    <Page
      className={classes.root}
      title="Medical Form"
    >
      <Container maxWidth={false}>
        <Toolbar readDoctorQR={readDoctorQR} readPatientQR={readPatientQR} />
        <SimpleTabs doctor={doctor} patient={patient} />
      </Container>
    </Page>
  );
};

export default MedicalForm;
