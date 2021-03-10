import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  makeStyles
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
  className,
  readSignQR,
  readAccountQR,
  appointDrQR,
  ...rest
}) => {
  const classes = useStyles();

  const readSign = (data) => {
    console.log(`Sign: ${data}`);
    if (readSignQR) {
      readSignQR(data);
    }
  };

  const readAccount = (data) => {
    console.log(`Account: ${data}`);
    if (readAccountQR) {
      readAccountQR(data);
    }
  };

  const appointDr = (data) => {
    if (appointDrQR) {
      appointDrQR(data);
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
        <ScanQR title="SCAN SIGNATURE" readCode={readSign} />
        <ScanQR title="SCAN ACCOUNT" readCode={readAccount} />
        <ScanQR title="APPOINT Dr" readCode={appointDr} />
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  readSignQR: PropTypes.func,
  readAccountQR: PropTypes.func,
  appointDrQR: PropTypes.func
};

export default Toolbar;
