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
            var temp = { name: 'month', data: [] }              
            for(var i = 0; i< arr.length; i++){    
              let t = { x:arr[i].month, y : arr[i].value}    
              temp.data.push(t)
            } 
            return temp                         
        });
        console.log(mutatedArray)
          return Highcharts.chart('container', {
            colors: ['#508991', '#175456', '#09BC8A', '#78CAD2'],     
            chart: {
              backgroundColor: {
                  linearGradient: [0, 600, 0, 0],
                  stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(161, 210, 206)']
                  ]
              },
              type: 'pie'
            },
            title: {
              text: 'export value of rubber products in month 1 to 12',
              style: {
                'color': '#175456',
              }
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
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      color: '#000000',
                      connectorColor: '#000000',
                      format: '<b>{point.x}</b>: {point.percentage:.1f} %'
                  }
              }
          },
            series: mutatedArray
          });
        })
        .catch(error => console.log(error));
};

fetchAllLocations();
