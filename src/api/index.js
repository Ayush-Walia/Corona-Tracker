import axios from 'axios';

const url = 'https://api.covid19india.org';

export const fetchData = async() => {
    try {
        let fetchedData = await axios.get(`${url}/data.json`);
        const { active, confirmed, recovered, deaths, lastupdatedtime } = fetchedData.data.statewise[0];
        const modifiedData = {
            overallData: { active, confirmed, recovered, deaths, lastupdatedtime },
            dailyData: fetchedData.data.cases_time_series.splice(42, fetchedData.data.cases_time_series.length)
        }
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async() => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}