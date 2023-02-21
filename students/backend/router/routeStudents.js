const express = require('express')
const route = express.Router()


const students = [
    "toto",
    "tata",
    "john"
]
route.get('/students', (req, res) => {
    res.json(students)
})

route.post('/students', (req, res) => {
    console.log('[POST] /students, req.body', req.body)
    students.push(req.body.name)
    res.send('ok')
})

route.delete('/students', (req, res) => {
    console.log('Delete user');
    students.slice(3, 0)
    res.send('ok delete')
})


module.exports = route