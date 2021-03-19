import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import { getMedicalForms } from 'src/solFunctions/solFunctions';
import { loadForm, loadName } from 'src/components/loadMedicalForms';
import Page from 'src/components/Page';
import AccordionComponent from './AccordionComponent';
import Triage from './Triage';
import Diagnosis from './Diagnosis';
import LabTest from './LabTest';
import Prescription from './Prescription';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  form: {
    width: '100%'
  }
}));

const SettingsView = () => {
  const classes = useStyles();

  const [data, setData] = useState();
  const [pName, setpName] = useState('');
  getMedicalForms(loadForm()).then((result) => {
    const formData = result[0];
    const formElmnts = [
      <AccordionComponent
        title="Triage"
        className={classes.form}
        body={(
          <Triage
            Temperature={formData.triage.temperature}
            Weight={formData.triage.weight}
            Bloodpressure={formData.triage.bloodPressure}
            Heartrate={formData.triage.heartrate}
          />
        )}
      />,
      <AccordionComponent
        title="Diagnosis"
        className={classes.form}
        body={(
          <Diagnosis
            className={classes.form}
            Symptoms={formData.diagnosis.symptoms}
            Details={formData.diagnosis.diagnosisDetails}
          />
        )}
      />,
      <AccordionComponent
        title="Labs"
        className={classes.form}
        body={(
          <LabTest
            className={classes.form}
            Testname={formData.labTests[0].testName}
            Testdetails={formData.labTests[0].testDetails}
            Testresults={formData.labTests[0].testResults}
            Comments={formData.labTests[0].comments}
          />
        )}
      />,
      <AccordionComponent
        title="Prescription"
        className={classes.form}
        body={(
          <Prescription
            className={classes.form}
            Drug={formData.prescriptions[0].drugName}
            Dosage={formData.prescriptions[0].portions}
          />
        )}
      />
    ];
    const cont = (
      <Container maxWidth="lg">
        {formElmnts}
      </Container>
    );
    const frms = [
      <AccordionComponent title="Form1" className={classes.form} body={cont} />
    ];

    setData(frms);
    setpName(loadName());
  }).catch((e) => console.log(e));

  return (
    <Page
      className={classes.root}
      title="loadForm"
    >
      <Container maxWidth="lg">
        <Typography variant="h2">{pName}</Typography>
        {data}
      </Container>
    </Page>
  );
};

export default SettingsView;
