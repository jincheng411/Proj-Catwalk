const express = require('express');
const path = require('path')
let app = express();

app.use(express.static(path(__dirname, '/../client/dist')));

app.use(express.json())

const port = 3456
app.listen(port, function() {
  console.log(`There's a Party on Port ${port}`)
})