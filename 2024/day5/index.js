const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\n\s?\n/)
}

const part1 = () => {
  const data = open()
  let rules = data[0].split(/\r?\n/).map(x => x.split('|'))

  const updates = data[1].split(/\r?\n/).map(x => {
    return { data: x.split(','), correct: true }
  })

  updates.forEach((update) => {
    update.data.forEach((num) => {
      rules.forEach(rule => {
        const [left, right] = rule;
        if (update.data.includes(left) && update.data.includes(right)) {
          if (num === left && update.data.indexOf(right) < update.data.indexOf(left)) {
            update.correct = false;
          }
        }
      })
    })
  })

  const finalCorrect = updates.filter(x => x.correct).map(x => x.data)
  const finalIncorrect = updates.filter(x => !x.correct).map(x => x.data)

  console.log(middleTotal(finalCorrect))

  return [finalIncorrect, rules]
};

const part2 = () => {
  const [updates, rules] = part1()

  while (true) {
    let stop = true
    rules.forEach(rule => {
      const [left, right] = rule;
      updates.forEach((update, id) => {
        if (update.includes(left) && update.includes(right)) {
          const indexRight = update.indexOf(right)
          const indexLeft = update.indexOf(left)
          update.forEach(num => {
            if (num === left && indexLeft > indexRight) {
              update.splice(indexLeft, 1);
              update.splice(indexRight, 0, left);
              stop = false
            }
          })
        }
      })
    })
    if (stop) {
      break
    }
  }

  console.log(middleTotal(updates))
}

const middleTotal = (updates) => {
  let count = 0
  updates.forEach(w => {
    let index = Math.floor(w.length / 2)
    count += parseInt(w[index])
  })
  return count
}

part2()