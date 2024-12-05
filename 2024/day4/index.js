const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\r?\n/).map(x => x.split(''))
}

const truc = (line, idLetter, data, idLine, type) => {
  let test = ''
  for (let index = 0; index <= 4; index++) {
    if (index !== 4) {
      if (type === 1) {
        test = test + line[idLetter + index]
      } else if (data[idLine + index]) {
        let suite = type === 2 ? data[idLine + index][idLetter] : type === 3 ? data[idLine + index][idLetter + index] : data[idLine + index][idLetter--]
        test = test + suite
      }
    }
  }
  if (test.length === 4) {
    return test
  }
}

const part1 = () => {
  const word = 'XMAS'
  const reversedWord = 'SAMX'
  const data = open()
  let res = []

  data.forEach((line, idLine) => {
    line.forEach((letter, idLetter) => {
      res.push(truc(line, idLetter, data, idLine, 1))
      res.push(truc(line, idLetter, data, idLine, 2))
      res.push(truc(line, idLetter, data, idLine, 3))
      res.push(truc(line, idLetter, data, idLine, 4))
    })
  })

  let count = 0
  res.forEach(t => {
    if (t === word) {
      count++
    } else if (t === reversedWord) {
      count++
    }
  })

  console.log(count);
};

const part2 = () => {
  const data = open()
  const word = 'MAS'
  const reversedWord = 'SAM'
  let res = []

  data.forEach((line, idLine) => {
    line.forEach((letter, idLetter) => {
      let test = ''
      let isWord = false

      for (let index = 0; index <= 3; index++) {
        if (index !== 3) {
          if (data[idLine + index]) {
            test = test + data[idLine + index][idLetter + index]
          }
        }
      }

      if (test.length === 3) {
        if (test === word) {
          res.push(test)
          isWord = true
        } else if (test === reversedWord) {
          isWord = true
          res.push(test)
        }
      }

      let test2 = ''

      for (let index = 0; index <= 3; index++) {
        if (index !== 3) {
          if (data[idLine + index]) {
            let id = idLetter - index + 2
            test2 = test2 + data[idLine + index][id--]
          }
        }
      }

      if (test2.length === 3) {
        if (isWord) {
          if (test2 === word) {
            res.push(test2)
          } else if (test2 === reversedWord) {
            res.push(test2)
          } else {
            res.pop()
          }
        }
      }
    })
  })

  console.log(res.length / 2);
}

part1()
part2()