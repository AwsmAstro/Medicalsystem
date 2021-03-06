import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  // Card,
  // CardContent,
  // TextField,
  // InputAdornment,
  // SvgIcon,
  makeStyles,
} from '@material-ui/core';
import ScanQR from '../../../components/ScanQR';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({
  className, readDoctorQR, readPatientQR, ...rest
}) => {
  const classes = useStyles();

  const readDoctorCode = (data) => {
    console.log(data);
    if (readDoctorQR) {
      readDoctorQR(data);
    }
  };

  const readPatientCode = (data) => {
    console.log(data);
    if (readPatientQR) {
      readPatientQR(data);
    }
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <ScanQR title="SIGN DOCTOR" readCode={readDoctorCode} />
        <ScanQR title="SIGN PATIENT" readCode={readPatientCode} />
        <Button
          color="primary"
          variant="contained"
        >
          Get Form
        </Button>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  readDoctorQR: PropTypes.func,
  readPatientQR: PropTypes.func
};

export default Toolbar;
