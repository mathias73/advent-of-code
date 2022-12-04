const { readFileSync } = require("fs");

const open = () => {
  const input = readFileSync("input.txt", "utf-8");
  return input.split(/\r?\n/);
};

const day4 = () => {
  const data = open();
  let countPart1 = 0;
  let countPart2 = 0;
  data.forEach((sections) => {
    const pairs = sections.split(",");
    const first = pairs[0].split("-");
    const second = pairs[1].split("-");

    const formatFirstOne = parseInt(first[0]);
    const formatFirstTwo = parseInt(first[1]);
    const formatSecondOne = parseInt(second[0]);
    const formatSecondTwo = parseInt(second[1]);

    if (
      (formatFirstOne >= formatSecondOne &&
        formatFirstTwo <= formatSecondTwo) ||
      (formatSecondOne >= formatFirstOne && formatSecondTwo <= formatFirstTwo)
    ) {
      countPart1++;
    }

    if (
      (formatFirstTwo >= formatSecondOne &&
        formatFirstTwo <= formatSecondTwo) ||
      (formatFirstOne >= formatSecondOne &&
        formatFirstOne <= formatSecondTwo) ||
      (formatSecondOne >= formatFirstOne &&
        formatSecondOne <= formatFirstTwo) ||
      (formatSecondTwo >= formatFirstOne && formatSecondTwo <= formatFirstTwo)
    ) {
      countPart2++;
    }
  });

  console.log(`Part 1: ${countPart1}  Part 2: ${countPart2}`);
};

day4();
