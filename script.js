//button used to add a task to the list
const addButton = document.getElementById("add_button");
// input box where users type tasks
const textBox = document.getElementById("text_box");
//Task list (obviously)
const taskList = document.getElementById("task_list");
//array to hold incomplete tasks
const tasks = [];
//array to hold completed tasks
const completed = [];
//Function to loop through array, adding each item to ul
const addTaskToList = () => {
    //Clear out previous li
    taskList.innerHTML= "";
    //loop through array
    for(const task of tasks){
        //create new list item
        const newTask = document.createElement("li");
        //add content from array
        newTask.innerText = task;
        //append li to ul
        taskList.appendChild(newTask);
    }
    //For completed tasks
    for(const task of completed){
        //create new list item (strikethrough and lower opacity)
        //create new list item
        const newTask = document.createElement("li");
        //add content from array
        newTask.innerText = task;
        //append li to ul
        taskList.appendChild(newTask);
        newTask.textDecoration = "line-through";

    }
    //clear input box
    textBox.value = "";
    //return cursor to input box
    textBox.focus();
}
// Function to add task to array
const addTaskToArray = (arrayName) => {
    //Only add task if not empty
    if(textBox.value !== "" ){
        arrayName.push(textBox.value);
        // alert(tasks);
    }
};

//Make tasks appear on screen
const addNewTask = () => {
    addTaskToArray(tasks);
    addTaskToList();
}

addButton.addEventListener("click", addNewTask)
//Allow task to be added using return/enter
textBox.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addNewTask();
    }
})

taskList.addEventListener("click", (event)=>{
    //Only activate if user clicks on li within task list
    const clickedLi = event.target.closest("li");
    if(clickedLi){
        //Move task from tasks to completed
        //Get index of li
        //Move array item with matching index from tasks to completed
        //Rerun task populating functions
    }
})

//TO DO (haha very ironic)
//When task is clicked move to bottom of task list
//Add strike through
//Make text lighter color
// How to make completed items stay comlete: Maybe make a second "completed tasks" list and generate them that way"



