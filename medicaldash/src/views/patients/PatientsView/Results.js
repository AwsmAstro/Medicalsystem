import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Link
} from '@material-ui/core';
import { setForm, setName } from 'src/components/loadMedicalForms';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, patients, ...rest }) => {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [patientState, setPatientState] = useState(patients);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handlePatientChange = () => {
    if (patients) {
      setPatientState(patients);
    }
  };

  const handlePatientClick = (event) => {
    setForm(event.target.parentNode.parentNode.parentNode.attributes.a.value);
    setName(event.target.innerText);
  };

  return (
    <Card
      onLoad={handlePatientChange}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Gender
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Date Of Birth
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patientState.slice(0, limit).map((patient) => (
                <TableRow
                  hover
                  key={patient.id}
                >
                  <Link a={patient.id} component={RouterLink} to="/app/loadForm" onClick={handlePatientClick}>
                    <TableCell>
                      <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {patient.name}
                        </Typography>
                      </Box>
                    </TableCell>
                  </Link>
                  <TableCell>
                    {patient.gender}
                  </TableCell>
                  <TableCell>
                    {patient.location}
                  </TableCell>
                  <TableCell>
                    {patient.dateOfBirth}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={patientState.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  patients: PropTypes.array.isRequired
};

export default Results;
