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

const Prescription = ({
  Drug,
  Dosage,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const [values] = useState({
    prescription: Drug,
    dosage: Dosage,
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
                label="Prescription"
                name="prescription"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.prescription}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Dosage"
                name="dosage"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.dosage}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

Prescription.propTypes = {
  className: PropTypes.string,
  Drug: PropTypes.string,
  Dosage: PropTypes.string
};

export default Prescription;
