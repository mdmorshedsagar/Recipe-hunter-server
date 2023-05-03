const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT ||3000;
const shef = require('./data/shef.json');
const recipe = require('./data/recipe.json');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/shef' , (req, res) =>{
   res.send(shef)
})
app.get('/recipe', (req,res)=>{
  res.send(recipe)
})
app.get('/shef/:id', (req,res)=>{
  const id = req.params.id ;
 
  const selectShef = shef.find(data => data.id === id)
  res.send(selectShef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})