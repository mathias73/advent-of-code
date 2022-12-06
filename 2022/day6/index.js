const { readFileSync } = require("fs");

const open = () => {
  return readFileSync("input.txt", "utf-8");
};

const day6 = (num) => {
  const data = open();
  let select = [];
  data.split("").every((_, index) => {
    select = [];
    for (i = 0; i < num; i++) {
      select.push(data[index + i]);
    }
    const value = select.map((el) => el);
    const duplicate = value.some((val, id) => value.indexOf(val) !== id);

    if (!duplicate) {
      console.log(index + num);
      return false;
    }
    return true;
  });
};

day6(4);
day6(14);
