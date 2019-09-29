//version 1
    // add a to do item
    // view to do list
    // quit to do app

    // var todos = [];
    // var input = prompt("What would you like to do?");
    //     while(input !== "quit"){
    //         if(input === "list") {
    //             console.log(todos);
    //         } else if(input = "new") {
    //             var newTodo = prompt("Enter new todo");
    //             todos.push(newTodo);
    //         }
    //         input = prompt("What would you like to do?");
    //     }
    //     console.log("ok, you quit the app")




// version 2
    // "add"    add a to do item
    // "list"   view to do list
    // "delete" remove specific to do
    // "quit"   quit to do app

var todos = [];
var input = prompt("What would you like to do?");
    while(input !== "quit"){
        // handle input
        if(input === "list") {
            listTodos();
        } else if(input === "new") {
            addTodo();
        } else if(input == "delete"){
            deleteTodo();
        }
        // ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("ok, you quit the app");

function listTodos(){
    console.log("*^*~~~~~~~~~~*^*")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("*^*~~~~~~~~~~*^*")
}

function addTodo(){
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todo array
        todos.push(newTodo);
        console.log("Added To Do");
}

function deleteTodo(){
    // ask for index of to do to be deleted
    var index = prompt("Enter index of to do to delete");
    // delete to do using splice()
        todos.splice(index,1);
        console.log("Deleted To Do");
}