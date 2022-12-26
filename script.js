// The Introduction 
// const greetings = function (name) {
//     console.log(`Nice to meet you ${name}!`)
// } 

// greetings("Skitter")
// greetings("Tattletale")

// How Much Land 
// const howMuchLand = function (length, width) {
//     const area = length * width 
//     return area 
// }

// console.log(`You have this many square metres of land: ${(howMuchLand(30, 20))}`)

// Which Number is Bigger? 
// const greaterNum = function (num1, num2) {
//     // const numbers = (5, 10)
//     if (num1 > num2) {
//         console.log(`The greater number between ${num1} and ${num2} is ${num1}.`)
//     } else if (num2 > num1) { 
//         console.log(`The greater number between ${num1} and ${num2} is ${num2}.`)
//     } else {
//         console.log("")
//     }
//     // return numbers

// }
// greaterNum(5, 10)
// greaterNum(7, 9)

// Grade Assigner 
const assignGrade = function (score) {
    if (score >= 80) {
        return("A") 
    } else if (score >= 70) {
        return("B")
    } else if (score >= 60) {
        return("C")
    } else if (score >= 50) {
        return("D")
    } else {
        return("F")
    }
}
console.log(assignGrade(83))
console.log(assignGrade(68))
console.log(assignGrade(52))