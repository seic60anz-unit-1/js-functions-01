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
const greaterNum = function (num1, num2) {
    // const numbers = (5, 10)
    if (num1 > num2) {
        console.log(`The greater number between ${num1} and ${num2} is ${num1}.`)
    } else if (num2 > num1) { 
        console.log(`The greater number between ${num1} and ${num2} is ${num2}.`)
    } else {
        console.log("")
    }
    // return numbers

}
greaterNum(5, 10)
greaterNum(7, 9)