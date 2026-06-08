// let plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
// }

function Plan(name, price, space, transfer, pages, discountMonth){
  this.name = name,
    this.price = price,
    this.space = space,
    this.transfer = transfer,
    this.pages = pages,
    this.discountMonth = discountMonth,
    this.calc = function () {
        console.log(this.price);
        
    }

};

let plan1 = new Plan("Basic" , 1000 , 100 , 1223 , 10 , 0.05);
console.log(plan1);
plan1.calc()
// let plan2 = new Plan("Premium" ,1500 , 120, 1226, 20 , 0.05);
// console.log(plan2);

// let today = new Date()







 

