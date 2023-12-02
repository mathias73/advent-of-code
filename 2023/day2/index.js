const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\r?\n/)
}

const emptySet = {
    blue: 0,
    green: 0,
    red: 0,
}

const part1 = () => {
    const input = open();
    let res = []
    input.forEach((i) => {
        const splittedLine = i.split(/[\/,\/;\/:]/ig)
        const id = splittedLine[0].replace(/\D/g, '')
        
        res[id] = emptySet
            
        splittedLine.shift();
        splittedLine.forEach((s) => {
            const set =  s.trim().split(' ');
            const number = set[0]
            const color = set[1]
            if((number > 12 && color === 'red') || (number > 13 && color === 'green') || (number > 14 && color === 'blue')) {
                res[id][color] = number
            }
        })
    })
    let resultat = 0
    res.forEach((r, id) => {
        if(Object.values(r).every(v => v === 0)) {
            resultat += id
        }
    })
    console.log(resultat);
}

const part2 = () => {
    const input = open();
    let res = []
    input.forEach((i) => {
        const splittedLine = i.split(/[\/,\/;\/:]/ig)
        const id = splittedLine[0].replace(/\D/g, '')
        
        res[id] = emptySet
            
        splittedLine.shift();
        splittedLine.forEach((s) => {
            const set =  s.trim().split(' ');
            const number = set[0]
            const color = set[1]
            if(!res[id][color]) {
                res[id][color] = +number
            } else if(res[id][color] < number) {
                res[id][color] = +number
            }
        })
    })
    res.shift()
    let power = 0
    res.forEach((r) => {
        power += r.blue * r.red * r.green
    })

    console.log(power);
}

part1()
part2()