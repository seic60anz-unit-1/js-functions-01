//The Introduction
const greetings = function(name) {
    console.log(`Nice to meet you ${name}!`)
}

greetings('Skitter')
greetings('Tattletale')
//How Much Land
const howMuchLand = function(length, width) {
    const area = length * width
        return area 
}

console.log(howMuchLand(30, 20)) // -> "You have this many square metres of land: 600"
//Which Number is Bigger?
const greaterNum = function (num1, num2) {
    if (num1 > num2) {
       return `The greater number between ${num1} and ${num2} is ${num1}` 
    } else {
        return `The greater number between ${num1} and ${num2} is not ${num1}`
    }
    if (num1 > num2) {
        return `The greater number between ${num1} and ${num2} is ${num1}` 
     } else {
         return `The greater number between ${num1} and ${num2} is not ${num1}`
     }
}
console.log(greaterNum(4,10))
console.log(greaterNum(10,4))
// Grade Assigner
const assignGrade = function (numberScore) {
      let output;
    if (grade >= 80) {
        output = 'A'
    }
    else if (grade >= 70) {
        output = 'B'
    }
    else if (grade >= 60) {
        output = 'C'
    }
    else if (grade >= 50) {
        output = 'D'
    }
    else {
        output = 'F'
    }
    return output;
}

console.log(assignGrade) = 83

//forgot to clone!