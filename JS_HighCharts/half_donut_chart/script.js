Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Average<br>Rainfall<br>in<br>January',
    align: 'center',
    verticalAlign: 'middle',
    y: 60
  },
  tooltip: {
    pointFormat: 'Value : {point.y} mm' + '<br>' + '{series.name} : <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: 'bold',
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '110%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Average Rainfall',
    innerSize: '50%',
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
