// firebase Auth

let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let userNameEl = document.getElementById("user-name");
let message = document.getElementById("message");
let fb = firebase.auth();
const db = firebase.firestore();






function signUp() {
  localStorage.setItem("displayName", userNameEl.value);
    fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...

    // console.log(user)
    user.displayName = userNameEl.value;
    message.innerHTML = "User Created Successfully";
      message.style.color = "green";
      redirectToTodo()
  })
  
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
  });

}

function signIn(){
   localStorage.setItem("displayName", userNameEl.value);
    fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    // console.log(user.uid);
    user.displayName = userNameEl.value;
    message.innerHTML = "Signed in Successfully";
      message.style.color = "green";
      redirectToTodo()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
  });
}
function signOut() {
   localStorage.removeItem("displayName");
fb.signOut().then(() => {
  // Sign-out successful.
  redirectToSignUp()
}).catch((error) => {
  // An error happened.
  console.log(error);
});
}

function redirectToTodo() {
  window.location.href = "./home.html";
}

function redirectToSignUp() {
  window.location.href = "./index.html";
}


// Firbase Firestore
let todosEl = document.getElementById("todos");
let userNamePlaceEl = document.getElementById("user-nameplace");


function initialLoad(){
  userNamePlaceEl.innerHTML = localStorage.getItem(displayName);
}


function addTodo() {
    db.collection("todos")
    .add({
    name: todosEl.value,
    uid: fb.currentUser.uid,
    
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

}