import React, { useState, Fragment } from 'react';
import { withStyles, Box, Collapse, IconButton, Paper, Typography } from '@material-ui/core'
import { Table as MaterialTable, TableBody, TableCell, TableContainer, TableHead,TableRow } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import styles from './Table.module.css';

const getTypography = (weight, text) => {
  return (
    <Typography component={'span'}>
      <Box fontWeight={weight}>
        { text }
      </Box>
    </Typography>
  )
}

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

const SubTable = ({ data }) => {
  if (data.districtData.length === 0) {
    return (
      <div className={styles.noDataContainer}> 
        { getTypography("fontWeightBold", "Data Not Available!") }
        <br />
      </div>
    )
  }
  else {
    return (
      <MaterialTable size="small" aria-label="stateWiseData">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>
              {getTypography("fontWeightBold", "District")}
            </StyledTableCell>
            <StyledTableCell align="right">
              {getTypography("fontWeightBold", "Confirmed")}
            </StyledTableCell>
            <StyledTableCell align="right">
              {getTypography("fontWeightBold", "Active")}
            </StyledTableCell>
            <StyledTableCell align="right">
              {getTypography("fontWeightBold", "Recovered")}
            </StyledTableCell>
            <StyledTableCell align="right">
              {getTypography("fontWeightBold", "Deaths")}
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.districtData.map((districtRow, index) => (
            <TableRow style ={ index % 2? { background : "#e9ecef" }:{ background : "white" }} key={districtRow.district}>
              <TableCell component="th" scope="row">
                {getTypography("fontWeightMedium", districtRow.district)}
              </TableCell>
              <TableCell align="right">
                {getTypography("fontWeightMedium", districtRow.confirmed)}
              </TableCell>
              <TableCell align="right">
                {getTypography("fontWeightMedium", districtRow.active)}
              </TableCell>
              <TableCell align="right">
                {getTypography("fontWeightMedium", districtRow.recovered)}
              </TableCell>
              <TableCell align="right">
                {getTypography("fontWeightMedium", districtRow.deceased)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    )
  }
}

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
                { getTypography("fontWeightBold", row.state) }
              </StyledTableCell>
              <StyledTableCell align="right">
                { getTypography("fontWeightBold", row.confirmed) }
              </StyledTableCell>
              <StyledTableCell align="right">
                { getTypography("fontWeightBold", row.active) }
              </StyledTableCell>
              <StyledTableCell align="right">
                { getTypography("fontWeightBold", row.recovered) }
              </StyledTableCell>
              <StyledTableCell align="right">
                { getTypography("fontWeightBold", row.deaths) }
              </StyledTableCell>
          </TableRow>
          <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <SubTable data = { row }/>
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
                            <StyledTableCell>
                              { getTypography("fontWeightBold", "State/UT") }
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              { getTypography("fontWeightBold", "Confirmed") }
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              { getTypography("fontWeightBold", "Active") }
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              { getTypography("fontWeightBold", "Recovered") }
                            </StyledTableCell>
                            <StyledTableCell align="right">
                              { getTypography("fontWeightBold", "Deaths") }
                            </StyledTableCell>
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