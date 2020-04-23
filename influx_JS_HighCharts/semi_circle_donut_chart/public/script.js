const fetchData = (place) => {
  return fetch(`/api/v1/tide/${place}`)
    .then(res => {
      if (res.status !== 200) {
        console.log(res);
      }
      return res;
    })
    .then(res => res.json())
    .catch(error => console.log(error));
}

const fetchAllLocations = () => {
  return Promise.all([
            fetchData('datarubber')            
         ])        
        .then(parsedRes => {  
          console.log(parsedRes)               
          const mutatedArray = parsedRes.map( (arr) => {               
            var temp = { name: 'export value', data: [] }              
            for(var i = 0; i< arr.length; i++){    
              let t = { x:arr[i].month, y : arr[i].value}    
              temp.data.push(t)
            } 
            return temp                         
        });
        console.log(mutatedArray)
          return Highcharts.chart('container', {
            colors: ['#508991', '#175456', '#09BC8A', '#71BF45', '#FAA74B', '#ff8080', '#ffb380', '#80ccff', '#8080ff', '#bf80ff', '#ff80ff', '#ffff80'],     
            chart: {
              backgroundColor: {
                  linearGradient: [0, 600, 0, 0],
                  stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(161, 210, 206)']
                  ]
              },
              plotBorderWidth: 0,
              plotShadow: false,
              type: 'pie',
            },
            title: {
              text: 'export value of<br>rubber products in<br>month 1 to 12',
              align: 'center',
              verticalAlign: 'middle',
              y: 60,
              style: {
                'color': '#175456',
              },
              align: 'center',
              verticalAlign: 'middle',
              y: 60
            },
            tooltip: {
              pointFormat: 'Value : {point.y} ' + '<br>' + '{series.name} : <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
              point: {
                valueSuffix: '%'
              }
            },
            xAxis: {
              title: {
                text: 'month'
              },               
            },
            yAxis: {
              title: {
                text: 'value'
              },
            },
            plotOptions: {
              pie: {
                dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                    fontWeight: 'bold',
                    color: 'white'
                  },
                  format: 'Month <b>{point.x}</b>',
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%',
                innerSize: '60%'
              }
            },
            series: mutatedArray
          });
        })
        .catch(error => console.log(error));
};

fetchAllLocations();
