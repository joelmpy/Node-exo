const express = require("express");
const app = express();
const cors = require('cors')
const routeStudents = require("./router/routeStudents");
const port = process.env.port || 8009;


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', routeStudents)


app.get('/', (req, res) => {
    res.send('bonjour ici students')
})


app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Mon port est le ${port}`);
});
