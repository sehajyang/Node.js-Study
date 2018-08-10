const express =require('express')
const logger =require('morgan')
const app = express()
const users = [] //todo

app.get('/',(req, res) => res.send('Hello WD'))
app.get('/users', (req, res) => res.json(users))
app.listen(3000, () => console.log('running'))
