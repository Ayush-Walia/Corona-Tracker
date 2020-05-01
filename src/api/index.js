import axios from 'axios';

const url = 'https://api.covid19india.org';

export const fetchData = async() => {
    try {
        let fetchedData = await axios.get(`${url}/data.json`);
        let fetchedDistrictData = await axios.get(`${url}/state_district_wise.json`);
        fetchedDistrictData = fetchedDistrictData.data;
        const { active, confirmed, recovered, deaths, lastupdatedtime } = fetchedData.data.statewise[0];
        let modifiedData = {
            overallData: { active, confirmed, recovered, deaths, lastupdatedtime },
            dailyData: fetchedData.data.cases_time_series.splice(42, fetchedData.data.cases_time_series.length),
            stateWiseData: fetchedData.data.statewise.splice(1, fetchedData.data.statewise.length)
        }
        await modifiedData.stateWiseData.forEach((statename, index) => {
            if (fetchedDistrictData[statename.state] === undefined) {
                modifiedData.stateWiseData[index]['districtData'] = [];
            }
            else {
                modifiedData.stateWiseData[index]['districtData'] =
                    Object.keys(fetchedDistrictData[statename.state].districtData).map(key => {
                        let districtData = fetchedDistrictData[statename.state].districtData[key];
                        districtData.district = key;
                        return districtData;
                    });
                }
        })
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}