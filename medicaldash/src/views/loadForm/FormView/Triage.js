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

const Triage = ({
  className,
  Temperature,
  Weight,
  Bloodpressure,
  Heartrate,
  ...rest
}) => {
  const classes = useStyles();

  const [values] = useState({
    temperature: Temperature,
    weight: Weight,
    bloodpressure: Bloodpressure,
    heartrate: Heartrate
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
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="temperature"
                label="Temperature"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.temperature}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="weight"
                label="Weight"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.weight}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="bloodpressure"
                label="BloodPressure"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.bloodpressure}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="heartrate"
                label="HeartRate"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.heartrate}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

Triage.propTypes = {
  className: PropTypes.string,
  Temperature: PropTypes.string,
  Weight: PropTypes.string,
  Bloodpressure: PropTypes.string,
  Heartrate: PropTypes.string
};

export default Triage;
