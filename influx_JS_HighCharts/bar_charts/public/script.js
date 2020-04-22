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
          const mutatedArray = parsedRes.map( (arr) => {               
            var temp = { name: 'value', data: [] }              
              for(var i = 0; i< arr.length; i++){ 
                let t = [parseInt(arr[i].month), arr[i].value]
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
              type: 'bar'
            },
            title: {
              text: 'export value of rubber products',
              style: {
                'color': '#175456',
              }
            },
            xAxis: {
              type: 'time',
              title: {
                text: 'month'
              }, 
            },
            yAxis: {
              title: {
                text: 'value'
              }
            },
            tooltip: {
                 pointFormat: 'Month <b>{point.x}</b> has an export value of <b>{point.y}'
            },
            series: mutatedArray
          });
        })
        .catch(error => console.log(error));
};

fetchAllLocations();
