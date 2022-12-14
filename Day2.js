

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

const draws = ["A X", "B Y", "C Z"];

draws.forEach((e) =>
  results.set(e, resultScore.draw + choiceScore[e.charAt(2)])
);
const wins = ["A Y", "B Z", "C X"];

wins.forEach((e) => results.set(e, resultScore.win + choiceScore[e.charAt(2)]));

const losses = ["A Z", "B X", "C Y"];

losses.forEach((e) =>
  results.set(e, resultScore.lose + choiceScore[e.charAt(2)])
);

const final = input.reduce((total, game) => {
  return total + (game.length < 2 ? 0 : results.get(game));
}, 0);


