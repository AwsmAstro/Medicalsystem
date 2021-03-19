import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Typography,
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
  },
  signInfo: {
    width: '100%'
  }
}));

const Toolbar = ({
  className, readDoctorQR, readPatientQR, doctor, patient, ...rest
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
        alignContent="flex-end"
      >
        <Box className={classes.signInfo}>
          <Typography variant="h5" display="block">{doctor}</Typography>
          <Typography variant="h5" display="block">{patient}</Typography>
        </Box>
        <ScanQR title="SIGN DOCTOR" readCode={readDoctorCode} />
        <ScanQR title="SIGN PATIENT" readCode={readPatientCode} />
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  readDoctorQR: PropTypes.func,
  readPatientQR: PropTypes.func,
  doctor: PropTypes.func,
  patient: PropTypes.func
};

export default Toolbar;
