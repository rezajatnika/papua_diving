// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require metro/metro
//= require chart/Chart

$(function(){

  var form = $(".login-form");

  form.css({
    opacity: 1,
    "-webkit-transform": "scale(1)",
    "transform": "scale(1)",
    "-webkit-transition": ".5s",
    "transition": ".5s"
  });

  // Chart variables
  var hourlyChart  = $("#hourlyChart");
  var dailyChart   = $("#dailyChart");
  var monthlyChart = $("#monthlyChart");
  var yearlyChart  = $("#yearlyChart");

  // Monthly chart options
  var monthlyOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 10
        },
        scaleLabel: {
          display: false,
          labelString: "Power (kWatt)",
          fontStyle: "bold"
        }
      }],
      xAxes: [{
        scaleLabel: true,
        labelString: "Year 2017 Periode",
        fontStyle: "bold"
      }]
    },
    legend: {
      display: true
    }
  };

  var hourlyOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        },
        scaleLabel: {
          display: false,
          labelString: "Power (kWatt)",
          fontStyle: "bold"
        }
      }],
      xAxes: [{
        scaleLabel: true,
        labelString: "Year 2017 Periode",
        fontStyle: "bold"
      }]
    },
    legend: {
      display: true
    }
  };

  if (monthlyChart.length > 0) {
    var monthlyData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Power Usage Monthly (2017) in kW",
          backgroundColor: "#ce352c",
          borderWidth: 1,
          data: [1.5,2,3,4,5,6,6.3,6.5,6.6,7,7.2,7.3,8]
        },
        {
          label: "Energy Usage Monthly (2017) in kWH",
          backgroundColor: "#fa6800",
          borderWidth: 1,
          data: [1.5,2,3,4,5,6,6.3,6.5,6.6,7,7.2,7.3,8].map(function(x) { return x * 1.2; })
        }
      ]
    };
  }

  if (hourlyChart.length > 0) {
    var hourlyData = {
      labels: hourlyChart.data('power').filter(filterDevicePM01).map(takeId),
      datasets: [
        {
          label: "Total Exported Energy",
          borderColor: "#ce352c",
          backgroundColor: "rgba(255, 255, 255, 0)",
          data: hourlyChart.data('power').filter(filterDevicePM01).map(takeExportedEnergy)
        },
        {
          label: "Total Imported Energy",
          borderColor: "#fa6800",
          backgroundColor: "rgba(255, 255, 255, 0)",
          data: hourlyChart.data('power').filter(filterDevicePM01).map(takeImportedEnergy)
        }
      ]
    };
  }

  // Create monthly chart
  if (monthlyChart.length > 0) {
    var monthly = new Chart(monthlyChart, {
      type: 'line',
      data: monthlyData,
      options: monthlyOptions
    });

    // Create hourly chart
    var hourly = new Chart(hourlyChart, {
      type: 'line',
      data: hourlyData,
      options: hourlyOptions
    });

    if (location.pathname == '/') {
      setTimeout(updateDiagram, 60000);
    }
  }
});

takeId = function(element) {
  return element.Id;
}

takeExportedEnergy = function(element) {
  return element.Total_Exported_Energy;
}

takeImportedEnergy = function(element) {
  return element.Total_Imported_Energy;
}

filterDevicePM01 = function(element) {
  return element.DeviceName == 'PSEM_PD_PM01';
}

function updateDiagram() {
  $.getScript('/overview.js');
  setTimeout(updateDiagram, 60000);
}
