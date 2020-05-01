import React from 'react';
import { Cards, CovidChart, Table, ProgressIndicator } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

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
      return(
        <div className={styles.progressCircleContainer}>
          <ProgressIndicator />
        </div>
      )
    }
    return (
      <div className={styles.container}>
        <Cards data={overallData} />
        <CovidChart data={dailyData} />
        <Table data={stateWiseData}/>
      </div>
    )
  }
}

export default App;