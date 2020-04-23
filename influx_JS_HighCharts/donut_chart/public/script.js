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
            colors: ['#508991', '#175456', '#09BC8A', '#78CAD2', '#FAA74B', '#ff8080', '#ffb380', '#80ccff', '#8080ff', '#bf80ff', '#ff80ff', '#ffff80'],     
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
              text: 'export value<br>of rubber products in<br>month 1 to 12',
              y:300
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
            legend:{
              enabled:false
              },
            tooltip: {
              pointFormat: 'Month {point.x} : <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                innerSize: '60%',
                dataLabels: {
                  enabled: true,
                  format: 'Month<b>{point.x}</b> : {point.y}'
                },
              }
            },
            series: mutatedArray,
          });
        })
        .catch(error => console.log(error));
};

fetchAllLocations();
