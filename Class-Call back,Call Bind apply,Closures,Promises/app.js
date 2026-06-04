

// function greet(name) {
//     console.log("Hello" + ' ' + name);
    
// }

// function user(callback) {
//     callback('Hassan')
// }

// user(greet)

// let callTest = (name) => {
//     console.log(`Hello ${name}`);
    

// }

// let testOther = (callback) => {
//     let userName = 'Saylani';
//     callback(userName);
// }

// testOther(callTest)

// -------------------------------------

// call,bind and apply

// let person = {
//     name: 'Hassan',
//     greet: function () {
//         console.log("Hello " + this.name);
        
//     }
// }
//  person.greet();

// ----------

// let person1 = {
//     name: 'Hannan',
// }

// let person2 = {
//     name: 'Mudassir'
// }

// function greet() {
//     console.log("Hello " + this.name);
    
// }

// greet();

// greet.call(person1)     // Call Method
// greet.call(person2)

// let person1 = {
//     name: 'Ahmed',
// }

// function introduce(age , city) {
//     console.log(this.name + " is " + age + " from " + city);
    
    
// }

// introduce.apply(person1, [19 , "Karachi"])     // apply


// closure

// let num1 = 10;

// let test = () => {
//     let name = "Karachi"
//     console.log(num1);
    
//     let testChild = () => {
//         console.log(name);
        

//     }

//     testChild()
// }

// test()

// -------------------


// let outer = () => {
//     let name = "Hassan";

//     let inner = () => {
//         console.log(name);
//     }

//     return inner;
    
// }

// let myFunc = outer();

// myFunc();

// ========================

// promises

// new Promise((resolve, reject) => {
//     let user = true;
//     if(user){
//         resolve("Kam hogaya")
//     }
//     else{
//         reject("Kam nhi howa")
//     }

// })
// .then((response) => {
//     console.log(response);
    

// })
// .catch((error) => console.log('error' , error)
// )

// let promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log("Apka kam hogaya");
//         resolve();
        

//     }, 1000)
// });

// promise1.then((data) => data)
// .catch((error) => console.log(error))
// .finally(() => console.log("Final chala"))


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((data) => console.log(data)
)
.catch((error) => console.log(error))

