const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
//const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.get('/th', db.getUsers)
app.get('/th/:id', db.getUserById)
app.post('/th', db.createUser)
app.put('/th/:id', db.updateUser)
app.delete('/th/:id', db.deleteUser)

app.listen(3000, function(){
  console.log(`App running on port 3000 .....`)
})


