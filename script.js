const greetings = function (name) {
    return `Nice to meet you ${name}`;
}
console.log(greetings('Wayne'))

// How much land
const howMuchLand = function (length, width) {
    const area = length * width;
    return (`You have this many square metres of land: ${area}`);
}
console.log(howMuchLand(3, 5.6))

// Which number is bigger?
const greaterNum = function (num1, num2) {
    let output = `The greater number between ${num1} and ${num2} is `;
    if (num1 > num2) {
        output += num1
    } else if (num1 < num2) {
        output += num2;
    } else {
        output += 'they are equal.'
    }
    return output;
}

console.log(greaterNum(4, 8));

// Grade assigner
const assignGrade = function (score) {
    let output;
    if (score > 100 && score < 0) {
        output = 'invalid score'
    } else if (score < 25) {
        output = 'F';
    } else if (score < 50) {
        output = 'D';
    } else if (score < 60) {
        output = 'C';
    } else if (score < 80) {
        output = 'B';
    } else {
        output = 'A';
    }
    return output;
}

console.log(assignGrade(98));