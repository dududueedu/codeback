const http = require('http');

const app = require('./config/express')();
const db = require("./config/mongoose_db.js");
require('dotenv').config();

http.createServer(app).listen(app.get('port'), 
    ()=> console.log("Express Server executed in port: " + app.get('port'))
);
db(process.env.DB_URI_ATLAS);