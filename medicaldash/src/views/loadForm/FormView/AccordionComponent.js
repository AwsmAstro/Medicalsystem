import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {},
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
}));

const AccordionComponent = ({
  title,
  body
}) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {body}
      </AccordionDetails>
    </Accordion>
  );
};

AccordionComponent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.func
};
export default AccordionComponent;
