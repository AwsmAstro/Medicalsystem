import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { createTriage } from '../../../solFunctions/solFunctions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Triage = ({
  className,
  doctor,
  patient,
  ...rest
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    temperature: '',
    weight: '',
    bloodpressure: '',
    heartrate: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const getValues = () => {
    console.log(values);
    console.log(`Doc: ${doctor} --- Pat: ${patient}`);
    createTriage(doctor,
      patient,
      values.temperature,
      values.weight,
      values.bloodpressure,
      values.heartrate);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Enter Patient Triage Data"
          title="Triage"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Temperature"
                name="temperature"
                onChange={handleChange}
                type="number"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Weight"
                name="weight"
                onChange={handleChange}
                type="number"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Blood Pressure"
                name="bloodpressure"
                onChange={handleChange}
                type="number"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Heart Rate"
                name="heartrate"
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={getValues}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Triage.propTypes = {
  className: PropTypes.string,
  doctor: PropTypes.string,
  patient: PropTypes.string
};

export default Triage;
