//button used to add a task to the list
const addButton = document.getElementById("add_button");
// input box where users type tasks
const textBox = document.getElementById("text_box");
//Task list (obviously)
const taskList = document.getElementById("task_list");
//array to hold tasks
const tasks = [];
//Function to loop through array, adding each item to ul
const addTaskToList = () => {
    //loop through array
    for(const task of tasks){
        //create new list item
        const newTask = document.createElement("li");
        //add content from array
        newTask.innerText = task;
        //append li to ul
        taskList.appendChild(newTask);
    }
}
// Function to add task to array
const addTaskToArray = () => {
    tasks.push(textBox.value);
    // alert(tasks);
};

//Make tasks appear on screen
const addNewTask = () => {
    addTaskToArray();
    addTaskToList();
}

addButton.addEventListener("click", addNewTask)

//TO DO (haha very ironic)
//Make functions to clear input (so that user can enter something new) and ul (so that it doesn't keep duplicating what we already have) 
//Clearing UL needs to be done before new tasks are added, otherwise it will clear out the new tasks and everything else