#! /usr/bin/env node
import inquirer from "inquirer";
//1) Computer will generate a random number
//2) User input for the guessing number
//3) compare user input with computer generated number and show number
const randamNumber = Math.floor(Math.random() * 10);



const answers = await inquirer.prompt([
    {
      name: "userguessnumber",
      type: "number",
      message: "Select a Number Betwwen 1-10: ",
    },
  ]);
  if (answers.userguessnumber === randamNumber) {
    console.log("Congtratulations!You Guess Right Number ");
  } else {
    console.log("You Guess Wrong Number ");
  }
  