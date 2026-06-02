

// function test(a, b, c) {
//     return a + b + c;
    
// }

// console.log(test());

// ----------------------------

// default parameter

// function test(a = 89, b= 23, c = 40) {
//     return a + b + c;
    
// }

// console.log(test());

// ------------------------------------------


//firstclass function

// ------Example-1-------------

// let greet = function () {
//     console.log('Hello students');
    
// };

// greet()

// -------Example-2-------------


// function sayHello() {
//     console.log("Hello");
      
// }

// function sayBye() {
//     console.log("Hassan");
    
// }

// function callFunction(say, day) {
//     say();
//     day();

    
    
// }

// callFunction(sayHello, sayBye);

// -------Example-3----------------

// function outer() {
//     return function () {
//         console.log("inner function");
        
//     };
    
// }

// let result = outer();
// result();

// Higher order function

// --------Example-1------

// function calculator(a, b, operation) {
//     return operation(a, b);
// }

// function add(x, y) {
//     return x + y;
// }

// console.log(calculator(5, 3, add));

// -----Example-2--------

let numbers = [1, 2, 3, 4];
let iterate = numbers.forEach((data) => {
    console.log(data);
     

})

console.log('iterate', iterate);

let test = numbers.map((data) => {
    return(data);
    

})

console.log('test' , test);




