const express = require('express')
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfiguration = require('./config/connection');
const web = require('./router/web');
const app = express()
const port = 8000


//-----------Connection Data Base---------------//
mongoose.Promise = global.Promise;
mongoose.connect(dbConfiguration.database, {
    useNewParser: true

}).then(()=>{
console.log('Database was  connected')

}).catch(()=>{
    console.log('Database was not connected')
});
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