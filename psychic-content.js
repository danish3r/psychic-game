const inquirer = require("inquirer");

var noOfWin = 0;
var noOfLoss = 0;

function ask() {
  console.log(
    "\n- - - - - - - - - - - - - - - - - - -\nWELCOME TO THE GAME PSYCHIC .____."
  );
  let randomString = getRandomString();
  console.log("the random string: " + randomString);
  let triedString = "";
  let maxNoTries = 5;
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
        console.log("\n \n- - - - - - - - - - - - - - - - - - - ");
        console.log("HOOOORAAAAAAAAY YOU GOT IT RIGHT :)");
        console.log("\n \n- - - - - - - - - - - - - - - - - - - ");
        ask();
        return;
      }
      // if not correct
      else {
        // if out of trials then: loss++
        if (triesLeft < 1) {
          noOfLoss++;
          console.log("\n \n- - - - - - - - - - - - - - - - - - - ");
          console.log("SORRY TRY THE NEXT ROUND :(");
          console.log("- - - - - - - - - - - - - - - - - - - \n \n");
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
