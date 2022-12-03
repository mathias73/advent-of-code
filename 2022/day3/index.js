const { readFileSync } = require("fs");

const open = () => {
  const input = readFileSync("input.txt", "utf-8");
  return input.split(/\r?\n/);
};

const commonCharacters = (string1, string2) => {
  let duplicateCharacter = "";
  for (let i = 0; i < string1.length; i += 1) {
    if (duplicateCharacter.indexOf(string1[i]) === -1) {
      if (string2.indexOf(string1[i]) !== -1) {
        duplicateCharacter += string1[i];
      }
    }
  }
  return duplicateCharacter;
};

const part1 = () => {
  const data = open();
  let sum = 0;

  data.forEach((rucksack) => {
    const firstCompartment = rucksack.slice(0, rucksack.length / 2);
    const secondCompartment = rucksack.slice(
      rucksack.length / 2,
      rucksack.length
    );
    const duplicate = commonCharacters(firstCompartment, secondCompartment);

    duplicate === duplicate.toUpperCase()
      ? (sum += duplicate.toLowerCase().charCodeAt(0) - 96 + 26)
      : (sum += duplicate.charCodeAt(0) - 96);
  });
  console.log(sum);
};

part1();

const part2 = () => {
  const data = open();
  let sum = 0;
  const arr = [];

  for (i = 0; i < data.length; i += 3) {
    arr.push(data.slice(i, i + 3));
  }

  arr.forEach((group) => {
    const one = commonCharacters(group[0], group[1]);
    const two = commonCharacters(group[1], group[2]);
    const duplicate = commonCharacters(one, two);

    duplicate === duplicate.toUpperCase()
      ? (sum += duplicate.toLowerCase().charCodeAt(0) - 96 + 26)
      : (sum += duplicate.charCodeAt(0) - 96);
  });
  console.log(sum);
};

part2();
