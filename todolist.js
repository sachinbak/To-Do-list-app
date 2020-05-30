var todos = [];
// asking for user input
var input = prompt("choose an option among 3. \n 1. new - add new task in list \n 2. list - list the added task \n 3. quit - quit the app \n What do you want to do?");

//if user dosen't want to quit the app
while(input != "quit"){
    // if user want to add a   new task  
    if ( input == "new") {
        var newtodo = prompt("Add a task which you want to do");
        todos = todos + "\n" +newtodo;
    }
    // if user want to list out the task saved in list
    else if(input == "list"){
        alert( "These are the pending task in your to do list \n "+todos);
        console.log(todos);

    }
    // asking again if user want to do something
    var input = prompt("choose an option among 3. \n 1. new - add new task in list \n 2. list - list the added task \n 3. quit - quit the app \n What do you want to do?");
}
//if user chooses quit
alert("You quit the app");