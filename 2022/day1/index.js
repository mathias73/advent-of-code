const { readFileSync } = require("fs");

function open() {
  const input = readFileSync("input.txt", "utf-8");
  return input.split(/\r?\n/);
}

function part1() {
  const data = open();
  let count = 0;
  const arr = [];
  for (i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      count += parseInt(data[i]);
    } else {
      arr.push(count);
      count = 0;
    }
  }
  console.log(Math.max(...arr));
  return arr;
}

part1();

function part2() {
  const arr = part1();
  let result = 0;
  for (i = 0; i < 3; i++) {
    const max = Math.max(...arr);
    result += max;
    const index = arr.indexOf(max);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  console.log(result);
}

part2();
