//here we have a 4 functions
// 1 - show will display the current list of todo items.

//add will take the text from the input box and save it in our "database".

//remove will remove the selected item from the list of todo items in our "database".

//get_todos is the function that will retrieve the list of todo items from our "database".

function get_todos(){
   var todos = new Array;
   var todos_str = localStorage.getItem('todo');
   if (todos_str !== null) {
       todos = JSON.parse(todos_str);
   }
   return todos;
}
function add(){
      var task = document.getElementById('new-case-i').value;
      if (task == ''){
        alert("please fill a ");
      }else{
      var todos = get_todos();
      todos.push(task);
      localStorage.setItem('todo', JSON.stringify(todos));

      show();

      return false;
}}
function remove(){
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));
  show();

      return false;
}
      function show() {
      var todos = get_todos();

      var html = '';

        for(var i=0; i<todos.length; i++) {
            html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
            document.getElementById('case-list').innerHTML = html;
      }

      var buttons = document.getElementsByClassName('remove');
      for (var i=0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', remove);
      };
      }
document.getElementById('new-case-btn').addEventListener('click', add);
show();
