const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let index = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/',index);
app.listen(3000, () => {
  console.log('Express is running...');
})