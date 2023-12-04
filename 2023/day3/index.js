const { readFileSync } = require("fs");

function open() {
  const input = readFileSync('input.txt', 'utf-8')
  return input.split(/\r?\n/)
}

const part1 = () => {
    const input = open()
    const res = []
    input.forEach((line, lineId) => {
        const splittedLine = line.split('')
        let number = ''
        let isPartNumber = false;
        splittedLine.forEach((item, itemId) => {
            if(!isNaN(item)) {
                number = number.concat('', item)
                const range = [itemId - 1, itemId, itemId +1]
                if(lineId === 0) { 
                    const checkedLine = checkLine(input[lineId + 1], range)
                    if(checkedLine || checkSideChars(splittedLine[itemId - 1]) || checkSideChars(splittedLine[itemId + 1])) {
                        isPartNumber = true
                    }
                } else if(lineId === input.length - 1) {
                    const checkedLine = checkLine(input[lineId - 1], range)
                    if(checkedLine || checkSideChars(splittedLine[itemId - 1]) || checkSideChars(splittedLine[itemId + 1])) {
                        isPartNumber = true
                    }
                } else {
                    const checkedUpLine = checkLine(input[lineId - 1], range)
                    const checkedDownLine = checkLine(input[lineId + 1], range)

                    if(checkedUpLine || checkedDownLine || checkSideChars(splittedLine[itemId - 1]) || checkSideChars(splittedLine[itemId + 1])) {
                        isPartNumber = true
                    }
                }
                if((!splittedLine[itemId + 1] || !splittedLine[itemId - 1]) && isPartNumber) {
                    res.push(number)
                }
            } else {
                if(isPartNumber) {
                    res.push(number)
                }
                isPartNumber = false
                number = ''
            }
        })
    })

    const xy = res.reduce((acc, curr) => acc + parseInt(curr), 0)
    console.log(xy);
}

const checkLine = (line, range) => {
    const splittedLine = line.split('')
    return range.some((id) => {
        if(splittedLine[id]?.match(/\W|_/g) && splittedLine[id] !== '.') {
            return true
        }
        return false
    })
}

const checkSideChars = (item) => {
    if(item?.match(/\W|_/g) && item !== '.') {
        return true
    }
    return false
}

//WIP
const part2 = () => {
    const input = open()
    const res = []
    input.forEach((line, lineId) => {
        const splittedLine = line.split('')
        splittedLine.forEach((item, itemId) => {
            const range = [itemId - 1, itemId, itemId +1]
            if(item === '*') {
                const upLineNumbers = []
                const downLineNumbers = []
                const sideNumbers = []
                checkNumbersOnLine(line, range)
            }
        })
    })

    const xy = res.reduce((acc, curr) => acc + parseInt(curr), 0)
    console.log(xy);
}

const checkNumbersOnLine = (line, range) => { 
    const splittedLine = line.split('')
    let number = ''
    range.forEach((r) => {
        if(!isNaN(splittedLine[r])) {
            console.log(splittedLine[r]);
            number = number.concat('', splittedLine[r])
        } else {
            number = ''
        }
    })
 }

part1()
part2()