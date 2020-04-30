import React from 'react';
import { Cards, CovidChart } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    overallData: {},
    dailyData: []
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    if(fetchData)
      this.setState({ 
        overallData: fetchedData.overallData,
        dailyData: fetchedData.dailyData
      });
  }

  // handleCountryChange = async (country) => {
  //     const fetchedData = await fetchData(country);
  //     this.setState({ data: fetchedData, country: country });
  // }

  render() {
    const { overallData, dailyData } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={overallData} />
        <CovidChart data={dailyData} />
      </div>
    )
  }
}

export default App;