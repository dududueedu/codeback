const render = (submission) => {
    return {
        id: submission._id,
        codeInput : submission.codeInput,
        result :  submission.result,
        error :  submission.error,
        id_problem :  submission.id_problem
    }
}

const renderMany = (submission) => {
    return submission.map((submission) => render(submission));
}

module.exports.render = render;
module.exports.renderMany = renderMany;