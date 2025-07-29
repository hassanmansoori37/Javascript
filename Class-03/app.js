// function doctor(time){
//     console.log("your appointment for doctor " + time + "!")
// }

// function doctor2(){
//     console.log("your appointment for Night!");
// }



// doctor("Morning");
// doctor("Evening");
// doctor("Night");
// doctor("Morning1/07/2025");
// doctor2();


// function cook(dish , time){
//     console.log("your " + dish + " is ready! for " + time);
// }


// cook("breakfast" , "biryani");
// cook("biryani" , "lunch");
// cook("pizza" , "dinner");
// cook("Daal Chawal" , "8:00 PM");
// cook("Chicken Karahi" , "9:00 PM");



// user prompt 2 number sum point



// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");



// function sum(num1 , num2){
//     let add = num1 + num2;
//     console.log(add);
// }


// sum(num1 , num2);






// prompt user firstName and lastName 
// Welcome user fullname !


// let firstName = prompt("Enter your first name");
// let lastName =  prompt("Enter your last name");

// function greet(firstName , lastName){
//     console.log("Welcome " + firstName + " " + lastName + "!");
//     alert("Welcome " + firstName + " " + lastName + "!");
//     document.write("Welcome " + firstName + " " + lastName + "!");
// }

// greet(firstName , lastName);



// function greet(){
//     return "Hello World!";
// }

// let greetUser = greet();
// console.log(greetUser);




// function greet (userName){
//     return "Hello " + userName + "!";
// }

// function welcomeUser (name){
//     let message = greet(name);
//     console.log(message);
// }


// welcomeUser ("Hassan");



// user prompt 2 numbers sum
// functions sum or console.loh()

function greetvalue(val1 , val2){
    let sum = val1 + val2;
    return sum;
}


function render(val1 , val2){
    // let final = val1 + val2;
    // console.log(final);
    let final = greetvalue(val1 , val2);
    console.log(final);
}


let val1 = +prompt("Enter first number");
let val2 = +prompt("Enter second number");

render(val1 , val2);


