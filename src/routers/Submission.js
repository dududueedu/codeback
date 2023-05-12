let controller = require("../controllers/Submission.js");

module.exports = (app) => {
    app.get("/api/submission", controller.listSubmission);
    app.get("/api/submission/:id", controller.findSubmission);
    app.post("/api/submission", controller.createSubmission);
    app.delete("/api/submission/:id", controller.deleteSubmission);
}