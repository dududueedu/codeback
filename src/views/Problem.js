const render = (problem) => {
    return {
        id: problem._id,
        name: problem.name,
        description: problem.description,
        input: problem.input,
        expectedOutput: problem.expectedOutput,
    }
}

const renderMany = (problems) =>{
    return problems.map((problem) => render(problem));
}

module.exports.render = render;
module.exports.renderMany = renderMany;