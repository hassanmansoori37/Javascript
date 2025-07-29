// 1. Write a program takes a character (number or string) in a variable & checks whether the given input is a number,
//  uppercase letter or case letter. (Hint : ASCII codes A = 65, Z = 90, a = 97, z = 122)


// let input = prompt("Enter a character (letter or number): ");

// if(input.length === 1) {
//     let charCode = input.charCodeAt(0);
    
//     if (charCode >= 65 && charCode <= 90) {
//         console.log("The input is an uppercase letter.");
//     } else if (charCode >= 97 && charCode <= 122) {
//         console.log("The input is a lowercase letter.");
//     } else if (charCode >= 48 && charCode <= 57) {
//         console.log("The input is a number.");
//     } else {
//         console.log("The input is neither a number nor a letter.");
//     }
// }

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal or not.

// let num1 = prompt("Enter the first integer: ");
// let num2 = prompt("Enter the second integer: ");

// if(num1 > num2) {
//     console.log("The larger integer is: " + num1);
// } else if(num2 > num1) {
//     console.log("The larger integer is: " + num2);
// }else {
//     console.log("Both integers are equal.");
// }

// 3. Write a program takes input a number from user & state whether the number is positive negative or zero

let number = prompt("Enter your number: ");

if(number > 0){
    console.log("The number is postive")
}
else if (number < 0 ) {
    console.log("The number is negative")
}
else {
    console.log("The number is zero")
}