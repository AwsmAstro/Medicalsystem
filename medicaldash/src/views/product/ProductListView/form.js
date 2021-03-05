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
import Triage from './Triage';
import Diagnosis from './Diagnosis';
import LabTest from './LabTest';
import Prescription from './Prescription';

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

const SimpleTabs = ({
  doctor,
  patient,
  ...rest
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} {...rest}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Triage" {...a11yProps(0)} />
          <Tab label="Diagnosis" {...a11yProps(1)} />
          <Tab label="Labs" {...a11yProps(2)} />
          <Tab label="Prescription" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Triage doctor={doctor} patient={patient} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Diagnosis doctor={doctor} patient={patient} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LabTest doctor={doctor} patient={patient} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Prescription doctor={doctor} patient={patient} />
      </TabPanel>
    </div>
  );
};

SimpleTabs.propTypes = {
  doctor: PropTypes.string,
  patient: PropTypes.string
};

export default SimpleTabs;
