//storing input in array
var todos= [];
//asking for input
var input = prompt("choose the option. \n 1. new \n 2. list \n 3. delete \n 4 quit");
//if input is not quit
while (input != "quit"){
    if(input == "new" ){
      addTask();
    }
    else if(input == "list"){
       listTask();
    } 
    else if(input == "delete"){
       deleteTask();
    }
    // re asking for inputs
    var input = prompt("choose the option. \n 1. new \n 2. list \n 3. delete \n 4 quit");
}
// if input is choosen as quit
alert(" You  have successfully quited the app");

function addTask(){
    var newtodo =  prompt(" Enter a new task ");
     todos.push(newtodo);
}
function listTask(){
    console.log("The list of planned task is mentioned below with there index no.");
    todos.forEach(function(todo, i){
        // it would be better if you open the console before running this program
        console.log(" task no " + i+ ": " + todo);
        alert(" task no " + i+ ": " + todo);
    });
}
function deleteTask(){
    var d = prompt("Type the index of task you want to delete ");
    todos.splice(d,1);
    console.log("The task of index "+d+" is deleted ");
    alert("As requested the item with index "+d+ " is deleted.")
}