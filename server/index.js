const express = require('express')
const gradient = require('gradient-string')
const bc = require('./controllers/books_controller')

const app = express()

app.use(express.json())

//Endpoints
app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

const PORT = 4000

app.listen(PORT, () => console.log(gradient.rainbow(`Server blazin on ${PORT}`)))