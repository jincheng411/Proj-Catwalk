const express = require('express');
//const path = require('path')
const axios = require('axios');
const morgan = require('morgan');
const {TOKEN} = require('../config.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(express.json());
app.use(morgan('dev'));

app.get('/api/products/:id', (req, res) => {
  const {id} = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,
  {headers: {Authorization: TOKEN}})
  .then(({data}) => {
    console.log(data)
    res.json(data);
  })
})

app.get('/api/products/:id/styles', (req, res) => {
  const {id} = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
  {headers: {Authorization: TOKEN}})
  .then(({data}) => {
    console.log(data)
    res.json(data);
  })
})

const port = 3456
app.listen(port, function() {
  console.log(`There's a Party on Port ${port}`);
});