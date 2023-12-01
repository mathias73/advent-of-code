const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\r?\n/)
}

const part1 = () => {
  const input = open()
  let res = 0
  input.forEach((i) => {
    res += parseInt(getTwoDigits(i))
  });

  console.log(res)
};

const numbers = [
  {letter: 'one', value: 1},
  {letter: 'two', value: 2},
  {letter: 'three', value: 3},
  {letter: 'four', value: 4},
  {letter: 'five', value: 5},
  {letter: 'six', value: 6},
  {letter: 'seven', value: 7},
  {letter: 'eight', value: 8},
  {letter: 'nine', value: 9},
]

const part2 = () => {
  const input = open()
  let res = 0
  input.forEach((i) => {
    numbers.forEach((n) => {
      if(i.includes(n.letter)) {
        i = i.replaceAll(n.letter, n.letter.substring(0, 2) + n.value + n.letter.substring(n.letter.length - 2))
      }
    })
    
    res += parseInt(getTwoDigits(i))
  });
  
  console.log(res)
}

const getTwoDigits = (line) => {
    const nums = line.replace(/\D/g, '')
    const splittedNums = nums.split('')
    return splittedNums[0] + splittedNums[splittedNums.length - 1]
}

part1();
part2();
