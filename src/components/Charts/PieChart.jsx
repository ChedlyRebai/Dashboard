import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ width, height }) => {
  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 50,
    options: {
      chart: {
        width: 50
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  return <Chart options={options} series={options.series} type="donut" height={height} />;
};

export default PieChart;
