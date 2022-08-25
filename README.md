# JavaScript-Basics

> This repository is for JS, HTML, CSS Prcatice purpose

---

## Difference between var and let

- let is block scoped but var is function scope
- let does not allow to redeclare variables but var does
- Hoisting does not occur in let. but it occurs in var

### Example of let

```js
let age = 30;
age = 31;
//let age = 32; (not possible)
console.log(age);
```

### Example of var

```js
var job = "Programmer";
var job = "Analyst"; // redecalring varibale
console.log(job);
```

#### (Note : var is a old way of defining variables prior to ES6)

## DOM Manipulation
