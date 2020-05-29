var todos = [];
var input = prompt("choose a option among 3. What do you want to do?");


while(input != "quit"){
    if ( input == "new") {
        var newtodo = prompt("Add a task which you want to do");
        todos = todos + " " +newtodo;
    }
    else if(input == "list"){
        console.log(todos);

    }
    var input = prompt("choose a option among 3. What do you want to do?");
}
alert("You quit the app");