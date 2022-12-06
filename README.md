# Intro to Functions

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Create two files `index.html` and `script.js`
1. Include `script.js` in `index.html` using a `<script>` tag
1. Open `index.html` in your web browser and open the console
1. After answering each section below, `git commit` your work
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request.

---

### The Introduction

Write a function named `greetings` that:
- takes 1 argument, a name
- when called for example `greetings('Skitter')` should console.log "Nice to meet you Skitter!"
- when called for example `greetings('Tattletale')` should console.log "Nice to meet you Tattletale!"

---

### How Much Land

Write a function called `howMuchLand` that:
- takes 2 arguments: `length` and `width`
- when called, it multiplies the length and width to calculate the area of land
- `return`s an output similar to below

```
console.log(howMuchLand(30, 20)) // -> "You have this many square metres of land: 600"
```

---

### Which Number is Bigger?

Write a function named `greaterNum` that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and console.log the output to make sure it works (e.g. "The greater number between 5 and 10 is 10.").

---

### Grade Assigner

Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that function for a few different scores and log the result to make sure it works.

    A few examples:
    ``` js
    assignGrade(83) // -> returns "A"
    assignGrade(68) // -> returns "C"
    assignGrade(52) // -> returns "D"
    ```
