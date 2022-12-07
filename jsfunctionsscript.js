// // THE INTRODUCTION

const greetings = function () {
    const name = "Jane"
    console.log("Nice to meet you " + name);
}
greetings()

// // HOW MUCH LAND

const howMuchLand = function (length, width) {
    const land = length * width;
    return land;
}

console.log("You have this many square metres of land: " + howMuchLand(50, 100));

// // WHICH NUMBER IS BIGGER?

const greaterNum = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log("The greater number between " + 24 + " and " + 18 + " is " + greaterNum(24, 18));
console.log("The greater number between " + 32 + " and " + 50 + " is " + greaterNum(32, 50));

// GRADE ASSIGNER

const assignGrade = function (score) {
    if (score >= 80) {
        console.log("A")
    } 
    if (score < 80 && score >= 60) {
        console.log("B");
    }
    if (score < 60 && score >= 40) {
        console.log("C");
    }
    if (score < 40 && score >= 20) {
        console.log("C");
    }
}

assignGrade(50)
assignGrade(32)
assignGrade(88)
assignGrade(70)

// const calculateTax = function (income, taxRate) {
//     const tax = income * taxRate;
//     console.log(tax);
// }

// calculateTax(10000, 0.12)
// calculateTax(20000, 0.19)
// calculateTax(30000, 0.22)