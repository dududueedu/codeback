const express = require('express');
const cors = require('cors');
const swUI = require("swagger-ui-express");
const swJson = require("../swagger.json");
const submissionRouter = require("../src/routers/Submission");
require('dotenv').config();

module.exports = function () {

    let app = express();
    app.set("port", process.env.PORT || 4018);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('./public'));
    app.use("/api-codeplay", swUI.serve, swUI.setup(swJson));

    submissionRouter(app);
    return app;
}