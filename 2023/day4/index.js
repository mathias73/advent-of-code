const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\r?\n/)
}

const part1 = () => {
    const input = open()
    let total = 0
    input.forEach((line) => {
        line = line.split(':')
        line.shift()
        line = line[0].split('|')
        const winningNums = line[0].trim().replace(/\s\s+/g, ' ', ' ').split(' ')
        const drawnNums = line[1].trim().replace(/\s\s+/g, ' ', ' ').split(' ')
        let points = 0
        let count = 0
        winningNums.forEach((num) => {
            if(drawnNums.includes(num)) {
                if(count === 0) {
                    points = 1
                } else {
                    points = points * 2
                }
                count++
            }
        })
        
        total += points
    })
    console.log(total);
}

//WIP
const part2 = (input = open()) => {
    let recursive = false
    input.forEach((line, id) => {
        line = line.split(':')
        line.shift()
        line = line[0].split('|')
        const winningNums = line[0].trim().replace(/\s\s+/g, ' ', ' ').split(' ')
        const drawnNums = line[1].trim().replace(/\s\s+/g, ' ', ' ').split(' ')
        let count = 0
        winningNums.forEach((num) => {
            if(drawnNums.includes(num)) {
               count++ 
            }
        })

        for (let i = 0; i <= count; i++) {
            input.push(line[id + i + 1])
        }
        if(count > 0) {
            recursive = true
        }
    })
    if(recursive) {
        return part2(input)
    }
    console.log(input.length);
}

part1()
part2()