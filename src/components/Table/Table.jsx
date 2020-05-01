import React, { useState, Fragment } from 'react';
import { withStyles, Box, Collapse, IconButton, Paper } from '@material-ui/core'
import { Table as MaterialTable, TableBody, TableCell, TableContainer, TableHead,TableRow } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import styles from './Table.module.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
              <StyledTableCell component="th" scope="row">
                  {row.state}
              </StyledTableCell>
              <StyledTableCell align="right">{row.confirmed}</StyledTableCell>
              <StyledTableCell align="right">{row.active}</StyledTableCell>
              <StyledTableCell align="right">{row.recovered}</StyledTableCell>
              <StyledTableCell align="right">{row.deaths}</StyledTableCell>
          </TableRow>
          <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <MaterialTable size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                  <StyledTableCell>District</StyledTableCell>
                  <StyledTableCell align="right">Confirmed</StyledTableCell>
                  <StyledTableCell align="right">Active</StyledTableCell>
                  <StyledTableCell align="right">Recovered</StyledTableCell>
                  <StyledTableCell align="right">Deaths</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {row.districtData.map((districtRow) => (
                    <TableRow key={districtRow.district}>
                      <TableCell component="th" scope="row">
                        {districtRow.district}
                      </TableCell>
                      <TableCell>{districtRow.confirmed}</TableCell>
                      <TableCell align="right">{districtRow.active}</TableCell>
                      <TableCell align="right">{districtRow.recovered}</TableCell>
                      <TableCell align="right">{districtRow.deceased}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </MaterialTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

const Table = (props) => {
    return (
        <div className={styles.container}>
            <TableContainer component={Paper}>
                <MaterialTable aria-label="collapsible table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell />
                            <StyledTableCell>State/UT</StyledTableCell>
                            <StyledTableCell align="right">Confirmed</StyledTableCell>
                            <StyledTableCell align="right">Active</StyledTableCell>
                            <StyledTableCell align="right">Recovered</StyledTableCell>
                            <StyledTableCell align="right">Deaths</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <Row key={row.statecode} row={row} />
                        ))}
                    </TableBody>
                </MaterialTable>
            </TableContainer>
        </div>
  );
}

export default Table;