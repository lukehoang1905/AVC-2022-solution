//Input parser
const inputString=document.getElementsByTagName("pre")[0].innerHTML
const inputArray=inputString.split("\n")


// Part 1
// A B C = rock paper scissor
// X Y Z = rock paper scissor
const choiceScore = {
  X: 1,
  Y: 2,
  Z: 3,
};
const resultScore = {
  win: 6,
  draw: 3,
  lose: 0,
};
const results = new Map();

const possibilities = [
  { type: "draw", patterns: ["A X", "B Y", "C Z"] },
  { type: "win", patterns: ["A Y", "B Z", "C X"] },
  { type: "lose", patterns: ["A Z", "B X", "C Y"] },
];

//Time constant 

possibilities.forEach((possibility) =>
  possibility.patterns.forEach((pattern) =>
    results.set(
      pattern,
      resultScore[possibility.type] + choiceScore[pattern.charAt(2)]
    )
  )
);

// Time O(n) ?
const final = input.reduce((total, game) => {
  return total + (game.length < 2 ? 0 : results.get(game));
}, 0);

