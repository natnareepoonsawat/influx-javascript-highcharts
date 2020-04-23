Highcharts.setOptions({
    colors: ['#01BAF2', '#71BF45', '#FAA74B', '#ff8080', '#ffb380', '#80ccff', '#8080ff', '#bf80ff', '#ff80ff', '#ffff80']
});  
Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Average Rainfall<br>in January',
      y:225
    },
    legend:{
    enabled:false
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          formatter:function(){
            return this.key+ ': ' + this.y + 'mm';
          }
        }
      }
    },
    series: [{
        name: 'Average Rainfall',
        colorByPoint: true,
        innerSize: '70%',
        data: [{
          name: 'Tokyo',
          y: 49.9,
          sliced: true,
          selected: true
        }, {
          name: 'New York',
          y: 83.6
        }, {
          name: 'London',
          y: 48.9
        }, {
          name: 'Berlin',
          y: 42.4
        }, {
          name: 'Barcelona',
          y: 50.64
        }, {
          name: 'Hawaii',
          y: 40.3
        }, {
          name: 'Mexico',
          y: 75.2
        }, {
          name: 'Madrid',
          y: 42.0
        }, {
          name: 'Paris',
          y: 65.7
        }, {
          name: 'Stavern',
          y: 35.9
        }]
    }]
  });
