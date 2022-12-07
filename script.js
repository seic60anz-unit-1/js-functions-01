//The introduction

// const greetings = function(name) {
//     return console.log(`Nice to meet you ${name}!`)
// }
// greetings('Skitter')
// greetings('Tattletale')

//How Much Land

// const howMuchLand = function(length, width) {
//     const area = length * width;
//     return `You have this many square metres of land: ${area}`
// }
// console.log(howMuchLand(30, 20))

// Which Number is Bigger?

// const greaterNum = function(x, y) {
//     if (x >= y) {
//         return `The greater number between ${x} and ${y} is ${x}.`
//     } else {
//         return `The greater number between ${x} and ${y} is ${y}.`
//     }
// }

// console.log(greaterNum(8,11))
// console.log(greaterNum(13,10))

// Grade Assigner

const assignGrade = function(score) {
    const grade = ["A", "B", "C", "D", "E", "F"]
    if (score >= 90) {
        return grade[0]
    }
    if (score >= 80) {
        return grade[1]
    }
    if (score >= 70) {
        return grade[2]
    }
    if (score >= 60) {
        return grade[3]
    }
    if (score >= 50) {
        return grade[4]
    } else {
        return grade[5]
    }
}

console.log(assignGrade(prompt()))