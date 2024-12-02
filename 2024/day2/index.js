const { readFileSync } = require("fs")

function open() {
  const input = readFileSync("input.txt", "utf-8")
  return input.split(/\r?\n/)
}

const part1 = () => {
  let data = open()
  data = data.map((x, id) => {
    return { levels: x.split(' ').map(Number), safe: true, id }
  })

  data = checkArray(data)

  const result = data.filter((report) => report.safe).length
  console.log(result)

  return [data, result]
}

const part2 = () => {
  let unsafe = [];
  let [data, result] = part1()
  data.filter((report) => !report.safe).forEach(el => {
    el.levels.forEach((ele, id) => {
      unsafe.push({ levels: el.levels.slice(0, id).concat(el.levels.slice(id + 1)), safe: true, id: el.id })
    })
  })

  unsafe = checkArray(unsafe)

  let final = []

  unsafe.filter((report) => report.safe).forEach(res => {
    if (!final.find(x => x.id === res.id)) {
      final.push({ id: res.id })
    }
  })

  console.log(final.length + result);
}

const checkArray = (array) => {
  array.forEach((report) => {
    const levels = report.levels

    let increase = true
    let decrease = true

    levels.forEach((level, index) => {
      if (level >= levels[index + 1]) {
        increase = false
      }

      if (level <= levels[index + 1]) {
        decrease = false
      }

      if (levels[index + 1] && ![1, 2, 3].includes(Math.abs(level - levels[index + 1]))) {
        report.safe = false
      }

      if (!increase && !decrease) {
        report.safe = false
      }
    })
  })

  return array
}

part2()
