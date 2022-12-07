//greetings

const hello = function (name) {
    const personName = name
    console.log(`Nice to meet you ${name}`)
}

hello (`Tonto`)

// How much land

const howMuchLand = function (length, width) {
    const land = length * width
    console.log(`You have this many square metres of land: ${land}`);
}

howMuchLand (400, 20)

//which number is bigger

const greaterNum = function (num1, num2) {
    if (num1 > num2) {
        console.log(`The greater number between ${num1} & ${num2} is ${num1}`);
    } else {
        console.log(`The greater number between ${num1} & ${num2} is ${num2}`);
    }
}

greaterNum (14, 10)

//Grade assigner

const assignGrade = function (score) {
    if (score >= 80){
        console.log(`You've scored an A!`);
    } else if (score < 80 && score >= 75){
        console.log(`You've scored a B!`);
    } else if (score < 75 && score >= 60){
        console.log(`You've scored a C!`);
    } else if (score < 60 && score >= 50){
        console.log(`You've scored a D!`);
    } else {
        console.log(`You've scored a Fail!`)
    }
}

assignGrade (80)