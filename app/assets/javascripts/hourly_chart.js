/*
// Hourly Chart

var hourlyChart = $('#hourlyChart');

// Options
var hourlyOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: true
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        max: 6
      },
      scaleLabel: {
        display: false,
        labelString: 'Power (kWatt)',
        fontStyle: 'bold'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: '2017-02-28 09:18',
        fontStyle: 'bold'
      }
    }]
  }
};

// Hourly Data
var hourlyData = {
  labels: [...Array(60).keys()],
  datasets: [
    {
      label: "Power Usage Hourly (2017-02-27 17:06) in kW",
      borderColor: "#ce352c",
      backgroundColor: "rgba(255, 255, 255, 0)",
      data: [...Array(60).keys()].map(function(x) { return Math.log(x); })
    },
    {
      label: "Energy Usage Monthly (2017-02-27 17:06) in kWH",
      borderColor: "#fa6800",
      backgroundColor: "rgba(255, 255, 255, 0)",
      data: [...Array(60).keys()].map(function(x) { return 1.2 * Math.log(x); })
    }
  ]
};

function createHourlyChart() {
  var hourly = new Chart(hourlyChart, {
    type: 'bar',
    data: hourlyData,
    options: hourlyOptions
  });
}
*/
