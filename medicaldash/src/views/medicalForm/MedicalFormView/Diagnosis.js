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
import { createDiagnosis } from '../../../solFunctions/solFunctions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Diagnosis = ({
  doctor,
  patient,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    symptoms: '',
    details: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const getValues = () => {
    console.log(values);
    createDiagnosis(values.symptoms,
      values.details,
      doctor,
      patient);
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
          subheader="Enter Patient Diagnosis Data"
          title="Diagnosis"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Symptoms"
                name="symptoms"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Details"
                name="details"
                onChange={handleChange}
                multiline
                rowsMax={4}
                required
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

Diagnosis.propTypes = {
  className: PropTypes.string,
  doctor: PropTypes.string,
  patient: PropTypes.string
};

export default Diagnosis;
