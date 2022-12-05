const { readFileSync } = require("fs");

const open = () => {
  const input = readFileSync("input.txt", "utf-8");
  return input.split(/\r?\n/);
};

/* 
[V]         [T]         [J]        
[Q]         [M] [P]     [Q]     [J]
[W] [B]     [N] [Q]     [C]     [T]
[M] [C]     [F] [N]     [G] [W] [G]
[B] [W] [J] [H] [L]     [R] [B] [C]
[N] [R] [R] [W] [W] [W] [D] [N] [F]
[Z] [Z] [Q] [S] [F] [P] [B] [Q] [L]
[C] [H] [F] [Z] [G] [L] [V] [Z] [H]
 1   2   3   4   5   6   7   8   9  
 */

const day5 = () => {
  const data = open();
  const crates = [
    ["V", "Q", "W", "M", "B", "N", "Z", "C"],
    ["B", "C", "W", "R", "Z", "H"],
    ["J", "R", "Q", "F"],
    ["T", "M", "N", "F", "H", "W", "S", "Z"],
    ["P", "Q", "N", "L", "W", "F", "G"],
    ["W", "P", "L"],
    ["J", "Q", "C", "G", "R", "D", "B", "V"],
    ["W", "B", "N", "Q", "Z"],
    ["J", "T", "G", "C", "F", "L", "H"],
  ];

  //Part 2
  const cratesPart2 = [
    ["V", "Q", "W", "M", "B", "N", "Z", "C"],
    ["B", "C", "W", "R", "Z", "H"],
    ["J", "R", "Q", "F"],
    ["T", "M", "N", "F", "H", "W", "S", "Z"],
    ["P", "Q", "N", "L", "W", "F", "G"],
    ["W", "P", "L"],
    ["J", "Q", "C", "G", "R", "D", "B", "V"],
    ["W", "B", "N", "Q", "Z"],
    ["J", "T", "G", "C", "F", "L", "H"],
  ];

  data.forEach((instruction) => {
    const num = instruction.match(/[0-9]+/g).map((n) => parseInt(n, 10));
    const el = crates[num[1] - 1].splice(0, num[0]).reverse();
    crates[num[2] - 1].unshift(...el);

    //Part 2
    const elPart2 = cratesPart2[num[1] - 1].splice(0, num[0]);
    cratesPart2[num[2] - 1].unshift(...elPart2);
  });

  let result = "";
  crates.forEach((crate) => {
    result += crate[0];
  });

  //Part 2
  let resultPart2 = "";
  cratesPart2.forEach((crate) => {
    resultPart2 += crate[0];
  });

  console.log(result, resultPart2);
};

day5();
