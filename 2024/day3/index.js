const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input
}

const part1 = () => {
  let data = open()
  data = data.match(/mul\(\d+,\d+\)/g)
  let count = 0
  data.forEach((mul) => {
    const res = mul.replace(/\D/g, ' ').trim().split(' ')
    count += res[0] * res[1]
  })

  console.log(count);
};

const part2 = () => {
  let data = open()
  data = data.match(/(mul\(\d+,\d+\))|(do\(\)|don't\(\))/g)
  let count = 0
  let doOrDont = true

  data.forEach(mul => {
    if (mul === 'do()' || mul === 'don\'t()') {
      doOrDont = mul === 'do()'
      return
    }
    if (doOrDont) {
      const res = mul.replace(/\D/g, ' ').trim().split(' ')
      count += res[0] * res[1]
    }
  })

  console.log(count);
}

part1()
part2()