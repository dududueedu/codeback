const express = require('express');
const cors = require('cors');
const swaggerUI = require("swagger-ui-express");
const swaggerJson = require("../swagger.json");
const languageRouter = require("../src/routers/Language");
const submissionRouter = require("../src/routers/Submission");
const problemRouter = require("../src/routers/Problem");
require('dotenv').config();

module.exports = function () {

    let app = express();
    app.set("port", process.env.PORT || 4018);
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('./public'));
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));

    languageRouter(app);
    submissionRouter(app);
    problemRouter(app);

    return app;
}