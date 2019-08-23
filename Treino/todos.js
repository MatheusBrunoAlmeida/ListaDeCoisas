var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];



function renderTodos() {
    listElement.innerHTML = ''


    for (todo of todos) {
        var todoELment = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = todo.indexOf(todos);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');



        var LinkText = document.createTextNode('Excluir');

        linkElement.appendChild(LinkText);



        todoELment.appendChild(todoText);
        todoELment.appendChild(linkElement);

        listElement.appendChild(todoELment);
    }

}


renderTodos();




function addTodo() {
    var todoText = inputElement.value;


    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    save();
}


btnElement.onclick = addTodo;




function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    save();
}


function save() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}