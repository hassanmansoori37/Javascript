// console.log("hello");

// setTimeout(() => {
//     console.log();
    
// }, 1000);

// console.log("city");


// new Promise((resolve, reject) => {
//     let car = false;

//     if(car){
//         console.log("kam hogaya");
//         resolve();
        
//     }

//     else{
//         console.log("kam nhi howa");
//         reject();
        
//     }

// }) 
// .then((res) => res)
// .catch((err) => err)
// .finally(() => console.log("Final chala"))


// new Promise((resolve, reject) => {
//     let user = false;

//     user ? resolve("you can go") : reject("you can not go")

// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
// .finally(() => console.log("final"))


// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

let data = async() => {
    let myData = await fetch('https://jsonplaceholder.typicode.com/todos')
    let parsed = await myData.json();
    console.log(parsed);
    

}

data();



