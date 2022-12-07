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