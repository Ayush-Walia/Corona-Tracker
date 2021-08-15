import React from 'react';
import { Cards, CovidChart, Table, ProgressIndicator, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { Typography, Box } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

class App extends React.Component {
  state = {
    overallData: {},
    dailyData: [],
    stateWiseData: []
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    if(fetchedData)
      this.setState({ 
        overallData: fetchedData.overallData,
        dailyData: fetchedData.dailyData,
        stateWiseData: fetchedData.stateWiseData
      });
  }

  render() {
    const { overallData, dailyData, stateWiseData } = this.state;
    if (dailyData.length === 0) {
      return (
        <ThemeProvider theme={theme}>
          <div className={styles.progressCircleContainer}>
            <ProgressIndicator />
          </div>
        </ThemeProvider>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <div className={styles.responsiveContainer}>
            <Typography variant="h3" className={styles.headingContainer}>
              <Box fontWeight="fontWeightBold">
                GO CORONA!
              <span role="img" aria-label="mask-face"> 😷 </span>
              #StayHome
            </Box>
            </Typography>
            <Cards data={overallData} />
            <Typography variant="h3" className={styles.headingContainer}>
              <Box fontWeight="fontWeightBold">
                Spread Trends
            </Box>
            </Typography>
          </div>
          <CovidChart data={dailyData} />
          <div className={styles.responsiveContainer}>
          <Typography variant="h3" className={styles.headingContainer}>
            <Box fontWeight="fontWeightBold">
              <br />
                State Wise Data
                <br />
              <br />
            </Box>
          </Typography>
          </div>
          <Table data={stateWiseData} />
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App;