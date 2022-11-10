const express = require('express')
const app = express()
const path = require("path");
const port = 3000

app.use(express.static('dist'))

app.get('/', function (req, res) {
    console.log(req)
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example1  app listening on port ${port}`)
})