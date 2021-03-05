import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
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
  readSignQR: PropTypes.func,
  readAccountQR: PropTypes.func
};

export default Toolbar;
