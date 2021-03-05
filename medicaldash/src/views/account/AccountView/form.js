import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles
} from '@material-ui/core';
import Hospital from './Hospital';
import Doctor from './Doctor';
import Patient from './Patient';
import Laboratory from './Laboratory';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 5
  },
}));

const SimpleTabs = ({ sign, account, ...rest }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} {...rest}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Hospital" {...a11yProps(0)} />
          <Tab label="Doctor" {...a11yProps(1)} />
          <Tab label="Patient" {...a11yProps(2)} />
          <Tab label="Laboratory" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Hospital sign={sign} account={account} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Doctor sign={sign} account={account} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Patient sign={sign} account={account} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Laboratory sign={sign} account={account} />
      </TabPanel>
    </div>
  );
};

SimpleTabs.propTypes = {
  sign: PropTypes.string,
  account: PropTypes.string
};

export default SimpleTabs;
