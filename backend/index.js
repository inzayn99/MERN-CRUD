const express = require('express')
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbfile = require('./config/connection');
const web = require('./router/web');
const app = express()
const port = 8000


//-----------Connection Data Base---------------//

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(cors())


app.use('/', web);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})