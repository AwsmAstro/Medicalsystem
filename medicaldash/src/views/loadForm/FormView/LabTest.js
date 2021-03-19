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

const LabTest = ({
  className,
  Testname,
  Testdetails,
  Testresults,
  Comments,
  ...rest
}) => {
  const classes = useStyles();

  const [values] = useState({
    testname: Testname,
    testdetails: Testdetails,
    testresults: Testresults,
    comments: Comments
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
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Test Name"
                name="testname"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.testname}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Test Details"
                name="testdetails"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.testdetails}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Test Results"
                name="testresults"
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={values.testresults}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Comments"
                name="comments"
                multiline
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                rowsMax={5}
                variant="outlined"
                value={values.comments}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

LabTest.propTypes = {
  className: PropTypes.string,
  Testname: PropTypes.string,
  Testdetails: PropTypes.string,
  Testresults: PropTypes.string,
  Comments: PropTypes.string
};

export default LabTest;
