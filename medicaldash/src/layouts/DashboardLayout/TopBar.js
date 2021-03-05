import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import ScanQR from '../../components/ScanQR';
import { setHospitalCode } from '../../components/ReadHospitalQR';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  title: {
    marginLeft: '15px'
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  readHospitalQR,
  ...rest
}) => {
  const classes = useStyles();
  // const [notifications] = useState([]);

  const getHospitalCode = (data) => {
    // console.log(data);
    setHospitalCode(data);
  };

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Typography variant="h3" className={classes.title}>Hospital Name</Typography>
        <Box flexGrow={1} />
        <ScanQR title="LogIn Hospital" readCode={getHospitalCode} />
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
  readHospitalQR: PropTypes.func
};

export default TopBar;
