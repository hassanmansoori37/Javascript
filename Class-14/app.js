// console.log(document)

// let h1E1 = document.childNodes[1].childNodes[2].childNodes[1]
// console.log(h1E1.nodeName);
// console.log(h1E1.nodeType);
// console.log(h1El.nodeValue = ".");  "This is a para".innerHTML 


let h1El = document.childNodes[1].childNodes[2].childNodes[3].childNodes;
 let pCounter = 0;

for (let i = 0; i < h1El.length; i++) {
    if (h1El[i].nodeType === 1) {
        pCounter++
    }
    if (pCounter === 2) {
        h1El[i].innerHTML = "This is a para from js" + i;
    }
}

console.log(h1El);
