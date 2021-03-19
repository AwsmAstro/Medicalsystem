import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Diagnosis = ({
  Symptoms,
  Details,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [values] = useState({
    symptoms: Symptoms,
    details: Details,
  });

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
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
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.symptoms}
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
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                multiline
                rowsMax={4}
                variant="outlined"
                value={values.details}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

Diagnosis.propTypes = {
  className: PropTypes.string,
  Symptoms: PropTypes.string,
  Details: PropTypes.string
};

export default Diagnosis;
