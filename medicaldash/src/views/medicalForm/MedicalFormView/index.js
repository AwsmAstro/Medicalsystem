import React from 'react';

import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { createMedicalForm, readDoctor, readPatient } from 'src/solFunctions/solFunctions';
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
  const [signInfo, setSignInfo] = React.useState({
    patientSign: '',
    doctorSign: ''
  });

  const readDoctorQR = (data) => {
    console.log(`Doctor: ${data}`);
    setDoctor(data);

    readDoctor(data).then((result) => {
      setSignInfo({
        doctorSign: `Doctor: ${result.name}`,
        patientSign: `Patient: ${signInfo.patientSign}`
      });
    }).catch((e) => console.log(e));
  };

  const readPatientQR = (data) => {
    console.log(`Patient: ${data}`);
    setPatient(data);
    createMedicalForm(doctor, data);

    readPatient(data).then((result) => {
      setSignInfo({
        doctorSign: `Doctor: ${signInfo.doctorSign}`,
        patientSign: `Patient: ${result.name}`
      });
    }).catch((e) => console.log(e));
  };

  return (
    <Page
      className={classes.root}
      title="Medical Form"
    >
      <Container maxWidth={false}>
        <Toolbar
          readDoctorQR={readDoctorQR}
          readPatientQR={readPatientQR}
          doctor={signInfo.doctorSign}
          patient={signInfo.patientSign}
        />
        <SimpleTabs doctor={doctor} patient={patient} />
      </Container>
    </Page>
  );
};

export default MedicalForm;
