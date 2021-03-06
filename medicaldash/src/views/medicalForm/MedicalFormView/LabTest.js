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
import { createLabTest } from '../../../solFunctions/solFunctions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const LabTest = ({
  className,
  doctor,
  patient,
  ...rest
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    testname: '',
    testdetails: '',
    testresults: '',
    comments: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const getValues = () => {
    console.log(values);
    createLabTest(values.testname,
      values.testdetails,
      values.testresults,
      values.comments,
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
          subheader="Enter Patient Lab Test Results"
          title="Lab Tests"
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
                label="Test Name"
                name="testname"
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
                label="Test Details"
                name="testdetails"
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
                label="Test Results"
                name="testresults"
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
                label="Comments"
                name="comments"
                multiline
                rowsMax={5}
                onChange={handleChange}
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

LabTest.propTypes = {
  className: PropTypes.string,
  doctor: PropTypes.string,
  patient: PropTypes.string
};

export default LabTest;
