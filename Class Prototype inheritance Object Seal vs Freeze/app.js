// prototype inheritance

// let obj1 = {
//     item1 : "apple",
// }

// // console.log(obj1);


// let obj2 = {
//     item2 : "strawberry",
//     __proto__ : obj1,
//     // __proto__ : function sum(a, b) {
//     //     return a + b;
//     // }

    
// }


 
// // console.log(obj2);


// let obj3 = {
//     item3 : "gauva",
//     __proto__ : obj2,
// }

// console.log(obj3);



let obj = {
    name : "Saylani",
    city : "Karachi",
}

// obj.name = 'Smit'
// console.log(obj);

// Object.freeze(obj);
// obj.name = 'Smit';
// obj.phone = 123456;
// console.log(obj);

Object.seal(obj);
obj.name = 'Smit';
// obj.phone = 123456;
console.log(obj);


