const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT ||3000;
const shef = require('./data/shef.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/shef' , (req, res) =>{
   res.send(shef)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})