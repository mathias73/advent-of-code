const { readFileSync } = require("fs");

const open = () => {
  const input = readFileSync("input.txt", "utf-8");
  return input.split(/\r?\n/);
};

const part1 = () => {
  const data = open();
  let score = 0;
  data.forEach((game) => {
    const plays = game.split(" ");
    if (plays[0] === "A") {
      if (plays[1] === "Y") {
        score += 8;
      }
      if (plays[1] === "Z") {
        score += 3;
      }
      if (plays[1] === "X") {
        score += 4;
      }
    }
    if (plays[0] === "B") {
      if (plays[1] === "Y") {
        score += 5;
      }
      if (plays[1] === "Z") {
        score += 9;
      }
      if (plays[1] === "X") {
        score += 1;
      }
    }
    if (plays[0] === "C") {
      if (plays[1] === "Y") {
        score += 2;
      }
      if (plays[1] === "Z") {
        score += 6;
      }
      if (plays[1] === "X") {
        score += 7;
      }
    }
  });
  console.log(score);
};

part1();

const part2 = () => {
  const data = open();
  let score = 0;
  data.forEach((game) => {
    const plays = game.split(" ");
    if (plays[0] === "A") {
      if (plays[1] === "Y") {
        score += 4;
      }
      if (plays[1] === "Z") {
        score += 8;
      }
      if (plays[1] === "X") {
        score += 3;
      }
    }
    if (plays[0] === "B") {
      if (plays[1] === "Y") {
        score += 5;
      }
      if (plays[1] === "Z") {
        score += 9;
      }
      if (plays[1] === "X") {
        score += 1;
      }
    }
    if (plays[0] === "C") {
      if (plays[1] === "Y") {
        score += 6;
      }
      if (plays[1] === "Z") {
        score += 7;
      }
      if (plays[1] === "X") {
        score += 2;
      }
    }
  });
  console.log(score);
};

part2();
