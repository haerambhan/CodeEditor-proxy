const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


app.post('/', (request, response) => {
    console.log(request.body);
    fetch('https://api.jdoodle.com/v1/execute',{
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(request.body)
      })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        response.json(data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
