// in this Game, you only have 5 turn, each turn have a
// random second to pass it and have a random stept to
// moving forward, minimum step you have to do is 30
// steps, if you steps is less than minimum steps, then
// you're lose this game, and if you steps is more or equal
// than minimum steps, you passed that game.

// all you have to do is create that program to handle that
// game that only 5 has turn

//snakes and ladders game
const shallPassed = 30;
let steps = 0;

function generateRandomSteps() {
  // don`t touch it
  return Math.ceil(Math.random() * 10);
}

function generateRendomSeconds() {
  // don`t touch it
  //in milliseconds
  return Math.ceil(Math.random() * 10) * 1000;
}
// console.log(generateRendomSeconds());

function snakeAndLaddersGame(stepNow, seconds, callback) {
  setTimeout(() => {
    console.log(
      `step ini membutuhkan ${seconds / 1000} detik untuk menyelesaikanya`
    );
    console.log(
      `step ini mendapatkan ${stepNow}\nsehingga langkah nyaa bertambah dari ${steps} menjadi ${(steps +=
        stepNow)}\n`
    );
    callback(steps);
  }, seconds);
}

function finisGame() {
  if (steps >= shallPassed) {
    console.log(
      `Congratulations, you have passsed this game!And your total steps is ${steps}`
    );
  }
}

snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
