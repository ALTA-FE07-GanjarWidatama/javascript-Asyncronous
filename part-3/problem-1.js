// in this Game, you only have 5 turn, each turn have a
// random second to pass it and have a random stept to
// moving forward, minimum step you have to do is 30
// steps, if you steps is less than minimum steps, then
// you're lose this game, and if you steps is more or equal
// than minimum steps, you passed that game.

// all you have to do is create that program to handle that
// game that only 5 has turn

const shallPassed = 30;
let step = 0;

function generateRandomsteps() {
  return Math.ceil(Math.random() * 10);
}

function generateRandomsecond() {
  return Math.ceil(Math.random() * 10) * 1000;
}

function snakendLadderGame(stepnow, second) {
  while (stepnow) {}
}
stepnow;
