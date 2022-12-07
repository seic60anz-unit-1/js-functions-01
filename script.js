// THE INTRODUCTION

const greetings = function(name) {
    console.log(`Nice to meet you ${name}!`)
}

greetings("Nicole")

//---------------------------------------------
// HOW MUCH LAND

const howMuchLand = function(length, width) {
    const area = length * width
    return `You have this many square metres of land: ${area}`
}

console.log(howMuchLand(30, 20))

//---------------------------------------------
// WHICH NUMBER IS BIGGER?

const greaterNum = function(num1, num2) {
    if (num1 > num2) {
        return `The greater number between ${num1} and ${num2} is ${num1}`
    } else if (num2 > num1) {
        return `The greater number between ${num1} and ${num2} is ${num2}`
    } else {
        return "They have the same value"
    }
}

console.log(greaterNum(5, 10))
console.log(greaterNum(12, 6))

//---------------------------------------------
// GRADE ASSIGNER

const assignGrade = function(score) {
    if (score >= 80) {
        return "A"
    } else if (score >= 70) {
        return "B"
    } else if (score >= 60) {
        return "C"
    } else if (score >= 50) {
        return "D"
    }
}

console.log(assignGrade(83))
console.log(assignGrade(68))
console.log(assignGrade(52))