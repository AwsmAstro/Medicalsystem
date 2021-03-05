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
  makeStyles,
  Select,
} from '@material-ui/core';
import { createPatient } from '../../../solFunctions/solFunctions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Patient = ({
  sign,
  account,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    gender: '',
    location: '',
    dateofbirth: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const getValues = () => {
    console.log(values);
    createPatient(sign, account,
      values.name, values.gender, values.location, values.dateofbirth.toString());
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
          subheader="Enter Patient Registration Details"
          title="Register Patient"
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
                label="Name"
                name="name"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Select
                fullWidth
                onChange={handleChange}
                required
                native
                variant="outlined"
                inputProps={{
                  name: 'gender',
                  id: 'select-gender',
                  label: 'Gender'
                }}
              >
                <option aria-label="None" value="" />
                <option value={0}>Male</option>
                <option value={1}>Female</option>
                <option value={2}>Other</option>
              </Select>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Location"
                name="location"
                onChange={handleChange}
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
                label="Date Of Birth"
                name="dateofbirth"
                onChange={handleChange}
                type="date"
                required
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
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
            Create Account
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Patient.propTypes = {
  className: PropTypes.string,
  sign: PropTypes.string,
  account: PropTypes.string
};

export default Patient;
