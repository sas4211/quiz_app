#! /usr/bin/env node
import inquirer from "inquirer";
const apilink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let response = await fetchQuiz.json();
    return response.results;
};
let data = await fetchData(apilink);
///console.log(data.results);
let startQuiz = async () => {
    let score = 0;
    /// for user input
    let name = await inquirer.prompt({
        name: "fname",
        type: "input",
        message: "Enter your first name",
    });
    ///console.log(chalk.red(`Welcome ${name.fname} to the quiz`);
    for (let i = 1; i < 5; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt([{
                name: "quiz",
                type: "list",
                message: data[1].question,
                choices: answers.map((val) => val),
            }]);
        if (ans.quiz == data[i].correct_answer) {
            ++score;
        }
    }
    console.log(`Your score is ${score}`);
};
startQuiz();
