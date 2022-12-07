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

const greaterNum = function(x, y) {
    if (x >= y) {
        return `The greater number between ${x} and ${y} is ${x}.`
    } else {
        return `The greater number between ${x} and ${y} is ${y}.`
    }
}

console.log(greaterNum(8,11))
console.log(greaterNum(13,10))