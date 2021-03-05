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
import { createHospital } from '../../../solFunctions/solFunctions';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Hospital = ({
  className,
  sign,
  account,
  ...rest
}) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    registrationnumber: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const getValues = () => {
    console.log(values);
    console.log(`sign: ${sign} --- Acc: ${account}`);
    createHospital(sign, account, values.name, values.registrationnumber);
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
          subheader="Enter Hospital Registration Details"
          title="Register Hospital"
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
                label="Name"
                name="name"
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
                label="Registration Number"
                name="registrationnumber"
                onChange={handleChange}
                type="number"
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
            Create Account
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Hospital.propTypes = {
  className: PropTypes.string,
  sign: PropTypes.string,
  account: PropTypes.string
};

export default Hospital;
