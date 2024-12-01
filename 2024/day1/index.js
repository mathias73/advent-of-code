const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\r?\n/)
}

const part1 = () => {
  const data = open()
  let right = []
  let left = []
  let res = []

  data.forEach(element => {
    element = element.split('   ')
    left.push(element[0])
    right.push(element[1])
  });

  right.sort()
  left.sort()

  left.forEach((el, index) => {
    const r = right[index]
    if(r > el) {
      res.push(r - el)
    } else {
      res.push(el - r)
    }
  })

  console.log(res.reduce((a, b) => a + b, 0));
};

const part2 = () => {
  const data = open()
  let right = []
  let left = []
  let res = []

  data.forEach(element => {
    element = element.split('   ')
    left.push(element[0])
    right.push(element[1])
  });

  let counts = []

  left.forEach(e => {
    right.forEach(el => {
      if(e === el) {
        counts[el] = (counts[el] || 0) + 1
      }
    })
  })

  counts.forEach((c, id) => {
    res.push(c * id)
  })

  console.log(res.reduce((a, b) => a + b, 0));
};

part1()
part2()
