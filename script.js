

const greetings = function(name) {
    console.log(`Nice to meet you ` + name + `!`);
}

greetings(`John`);

const howMuchLand = function(length, width) {
    return length * width;
}

console.log(howMuchLand(4, 5));

const greaterNum = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {return num2;}
}

console.log(greaterNum(3, 10))
console.log(greaterNum(45, 12))

const assignGrade = function(numberScore) {
    if (numberScore >= 80) {
        return `A`;
    }
        else if (numberScore >= 70) {
        return `B`;
    }
        else if (numberScore >= 60) {
            return `C`;
        }
        else if (numberScore >= 50) {
            return `D`;
        }
        else if (numberScore >= 40) {
            return `E`;
        }
        else {return `F`;}
}
console.log(assignGrade(87));