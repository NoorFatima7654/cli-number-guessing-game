#! /usr/bin/env node


import inquirer from "inquirer"



const randomNumber = Math.floor(Math.random() * 10 + 1);



const  answers = await inquirer.prompt([
{

name: "userGuessNumber",
type: "number",
message: "Please guess a number between 1-10",
}
]);
if(answers.userGuessNumber === randomNumber) {
    console.log("congtratulations! You guessed right number.")
} else {
    console.log("you guessed wrong number between 1-10");
}