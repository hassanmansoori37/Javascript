var ul = document.getElementById('ul');

var inp = document.getElementById('inp');

var todos = JSON.parse(localStorage.getItem('todos')) || [];


function todo() {

    // if(inp.value.trim() == "") return

    console.log(inp.value);
    

    var obj = {
        id : Date.now(),
        text : inp.value,
        completed : false,

    }

    todos.push(obj);

    localStorage.setItem('todos' , JSON.stringify(todos));

    renderTodos()
}

function renderTodos() {
    for (let i = 0; i < todos.length; i++) {
        // console.log(todos[i]);
        var li = document.createElement('li');
        li.innerText = todos[i].text;
        ul.appendChild(li);
        
        
    }
}
