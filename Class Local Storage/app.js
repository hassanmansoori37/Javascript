
function submit() {
// var studentArr = [];
var name2 = document.getElementById('name').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;
var rollno = document.getElementById('rollno').value;


    // studentArr.push(name2, phone, email, rollno);

    // console.log(studentArr);

    var student = {
        stName : name2,
        phone : phone,
        email : email,
        rollno : rollno,
    };

    // console.log(student);
    localStorage.setItem('stdData',JSON.stringify(stdData))


}

function getData() {
 var get = localStorage.getItem('stdData');
//    console.log(get);
var parseValue = JSON.parse(get);
console.log(parseValue);
document.write(parseValue.stName)

var {stName, phone, email, rollno} = parseValue;

console.log(stName);
console.log(phone);
console.log(email);
console.log(rollno);





   
}


