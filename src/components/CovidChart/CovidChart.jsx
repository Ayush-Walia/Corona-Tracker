import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from './CovidChart.module.css';

const CovidChart = (props) => {
    console.log(props)
    let CovidChartData =  {
      series: [
        {
          name: "Active",
          data: props.data.map((confirmed) => confirmed.totalconfirmed - confirmed.totalrecovered - confirmed.totaldeceased)
        },
        {
          name: "Recovered",
          data: props.data.map((confirmed) => confirmed.totalrecovered)
        },
        {
          name: "Confirmed",
          data: props.data.map((confirmed) => confirmed.totalconfirmed)
        },
        {
          name: "Deaths",
          data: props.data.map((confirmed) => confirmed.totaldeceased)
        }
      ],
      options: {
        chart: {
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          type: 'gradient',
          gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100]
            },
        },
        title: {
          text: 'Spread Trends',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], 
            opacity: 0.5
          },
        },
        xaxis: {
          categories: props.data.map((confirmed) => confirmed.date),
        },
        markers: {
          size: 3,
          colors: ["#000524"],
          strokeColor: "#00BAEC"
        }
      }
    }

  return (
      <div className={styles.container}>
        <ReactApexChart
              options={CovidChartData.options}
              series={CovidChartData.series}
              type="area"
          />
      </div>
      )
}

export default CovidChart;