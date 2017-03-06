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
//= require bootstrap-sprockets
//= require code/highcharts
//= require moment
//= require bootstrap-datetimepicker

$(function () {
	$('#select-hour').datetimepicker({
		viewMode: 'days',
		maxDate: new Date(),
		format: 'MM/DD/YYYY HH:00'
	});

  $('a#time').click(function(event){
      event.preventDefault();
  });

  setTimeout(updateOverview, 1);
});

function updateOverview() {
  $.getScript('/overview.js');
  setTimeout(updateOverview, 10000);
}
