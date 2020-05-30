// var todos = [];
// // asking for user input
// var input = prompt("choose an option among 3. \n 1. new - add new task in list \n 2. list - list the added task \n 3. quit - quit the app \n 4. delete - delete the completed task from list \n What do you want to do?");

// //if user dosen't want to quit the app
// while(input != "quit"){
//     // if user want to add a   new task  
//     if ( input == "new") {
//         var newtodo = prompt("Add a task which you want to do");
//         //todos = todos + "\n" +newtodo;
//         todos.push(newTodo);
//     }
//     // if user want to list out the task saved in list
//     else if(input == "list"){
//         todos.forEach(function (todo,i){
//         alert( "These are the pending task in your to do list \n "+ i + ": "+ todo);
//         console.log(todos)});

//     }
//     else if(input == "delete"){
//         var i = prompt( "Which task you want to delete \n" + todos);
        
//     }
//     // asking again if user want to do something
//     var input = prompt("choose an option among 3. \n 1. new - add new task in list \n 2. list - list the added task \n 3. quit - quit the app \n 4. delete - delete the completed task from list \n What do you want to do?");
// }
// //if user chooses quit
// alert("You quit the app");

var todos= [];

var input = prompt("choose the option. \n 1. new \n 2. list \n 3. delete \n 4 quit");
while (input != "quit"){
    if(input == "new" ){
      var newtodo =  prompt(" Enter a new task ");
      todos.push(newtodo);
    }
    else if(input == "list"){
        todos.forEach(function(todo, i){
            console.log(" task no " + i+ ": " + todo);
            alert(" task no " + i+ ": " + todo);
        });
    }
    else if(input == "delete"){
        var d = prompt("Type the index of task you want to delete ");
        todos.splice(d,1);
    }
    var input = prompt("choose the option. \n 1. new \n 2. list \n 3. delete \n 4 quit");
}
alert(" You  have successfully quited the app");