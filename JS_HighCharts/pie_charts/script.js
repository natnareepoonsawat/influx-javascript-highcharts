Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Average Rainfall in January'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true, 
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'       
      }
    }
  },
  series: [{
    name: 'Country',
    colorByPoint: true,
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