// The Introdocution
const greetings = function (name) {
    if (name === 'Skitter') {
        console.log('Nice to meet you Skitter!')
    } else if (name === 'Tattletale') {
        console.log('Nice to meet you Tattletale!')
    }
}
 console.log(greetings('Skitter'))
 console.log(greetings('Tattletale'))

 // How Much Land

 const howMuchLand = function (length,width) {
    land = length * width
    console.log(`You have this many square metres of land: ${land}`)
 }
howMuchLand(10,10)

// Which Number is bigger
const greaterNum = function (number1,number2) {
    if (number1 > number2) {
    return number1
    }if (number1 < number2)
    return number2
}
const num1 = 10
const num2 = 5
outcome = greaterNum(num1,num2)
console.log(`The greater number between ${num1} and ${num2} is ${outcome}`)

// Grader Assigner

const assginGrade = function (grade) {
    if (grade > 85) {
        console.log("A") // Can return, return a string (e.g. return 'A')
    } else if (grade > 75) {
        console.log("B")
    } else if (grade > 65) {
        console.log("C")
    }else if (grade > 55) {
        console.log("D")
    } else if (grade < 50) {
        console.log("F")
    }
    }

assginGrade(88)
assginGrade(40)
assginGrade(74)