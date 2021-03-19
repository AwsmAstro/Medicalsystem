import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Popover,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Notification = ({ show }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(show);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} color="primary">Success!</Typography>
      </Popover>
    </div>
  );
};

Notification.propTypes = {
  show: PropTypes.func
};

export default Notification;
