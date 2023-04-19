const ProblemModel = require('../models/Problem');
const view = require('../views/Problem');

module.exports.createProblem = (req, res) => {
    let problem = req.body;
    let promise = ProblemModel.create(problem);
    console.log(problem);
    promise.then((problem) => {
        res.status(201).json(view.render(problem));
    }).catch((error) => {
        res.status(400).json({ message: error });
    });
};

module.exports.listProblem = (req, res) => {
    ProblemModel.find().exec().then((problem) => {
        res.status(200).json(problem);
        console.log("entrou na promise! ---- listProblem")
    }).catch((error) => {
        res.status(400).json({ message: "error message", error: error });
    });
};

module.exports.findProblem = (req, res) => {
    let promise = ProblemModel.findById(req.params.id).exec();
    promise.then((problem) => {
        res.status(200).json(view.render(problem));
        console.log("entrou na promise! ---- findProblem")
    }).catch((error) => {
        res.status(404).json({ message: "problem not found", error: error });
    });
};

module.exports.deleteProblem = (req, res) => {
    let promise = ProblemModel.findByIdAndDelete(req.params.id).exec();
    promise.then((problem) => {
        res.status(200).json(view.render(problem));
    }).catch((error) => {
        res.status(400).json({ message: "problem not found", error: error });
    });
};