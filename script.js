//The Introduction
const greetings = function(name){
 console.log(`Nice to meet you ${name}!`)
}
greetings("Fane")

//How Much Land
const howMuchLand = function(length, width){
return length*width
}
console.log(howMuchLand(2,4))

//Which Number is Bigger?
const greaterNum = function(num1,num2){
    if(num1===num2){
        return `it is equal and it is ${num1}.`
    } else if ( num1>num2){
        return `The greater number between ${num1} and ${num2} is ${num1}.`
    } else {
        return `The greater number between ${num1} and ${num2} is ${num2}.`
    }
}
console.log(greaterNum(3,5))
console.log(greaterNum(12,6))

//Grade Assigner
const assignGrade = function(score){
    if(score>=80){
        return "A"
    } else if (score>=70){
        return "B"
    } else if (score >=60) {
        return "C"
    } else if (score>=50){
        return "D"
    } else {
        return "F"
    }
}

console.log(assignGrade(90))
console.log(assignGrade(72))
console.log(assignGrade(55))
