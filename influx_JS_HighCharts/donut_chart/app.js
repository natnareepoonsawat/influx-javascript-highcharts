const Influx = require('influx');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', 3000);

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'rubber',
  schema: [
    {
      measurement: 'datarubber',
      fields: { height: Influx.FieldType.FLOAT },
      tags: ['month']
    }
  ]
});

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}.`);
});

app.get('/api/v1/tide/:mesu', (request, response) => {
  const { mesu } = request.params;
  influx.query(`
    select * from ${mesu}
     limit 12
  `)
  .then(result => response.status(200).json(result))
  .catch(error => response.status(500).json({ error }));
}); 
