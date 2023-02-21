const express = require('express')
const app = express()
const routerGameofThrones = require('./routes/gameofTrones')
const authorsRoute = require('./routes/authors')
const port = process.env.port || 8008

app.use('/', authorsRoute)
app.use('/', routerGameofThrones)










app.listen(port, err => {
    if(err){
        return console.log('ERROR', err)
    }
    console.log(`Listening on port ${port}`)

})