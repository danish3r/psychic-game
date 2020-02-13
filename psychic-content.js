const inquirer = require("inquirer");

var noOfWin = 0;
var noOfLoss = 0;

function ask() {
  let randomString = getRandomString();
  console.log("the random string: " + randomString);
  let triedString = "";
  let maxNoTries = 10;
  let triesLeft = maxNoTries;

  const askQ = () => {
    inquirer.prompt(question).then(response => {
      let ourAnswer = response.text;
      console.log("Our response: " + ourAnswer);
      triesLeft--;
      // if correct
      if (ourAnswer === randomString) {
        // wins++
        noOfWin++;

        ask();
        return;
      }
      // if not correct
      else {
        // if out of trials then: loss++
        if (triesLeft < 1) {
          noOfLoss++;
          ask();
          return;
        }
        triedString = triedString + ourAnswer;
        console.log("Wins: " + noOfWin);
        console.log("Loss: " + noOfLoss);
        console.log("Number of tries left: " + triesLeft);
        console.log("Your gues so far: " + triedString);
        askQ();
      }
    });
  };
  askQ();
  // random letter gen: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  /*inquirer.prompt(question1).then(answer => {
            if (answer.text !== "i") {
                inquirer.prompt(question1);
            }
            inquirer
                .prompt(question2)
                .then(answers => {
                    if (questtion2.answer === "j") {
                        inquirer.prompt(question1);
                    } else {
                        inquirer.prompt(question2);
                    }
                });
        }*/
}

function getRandomString() {
  var result = "";
  while (!result)
    result = Math.random()
      .toString(36)
      .substring(2, 3);
  return result;
}

var question = [
  {
    message: "Guess what letter I'm thinking of\ntest",
    type: "input",
    name: "text"
  }
];

ask();
