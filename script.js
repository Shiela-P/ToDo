//button used to add a task to the list
const addButton = document.getElementById("add_button");
// input box where users type tasks
const textBox = document.getElementById("text_box");


//array to hold tasks
const tasks = [];

// Function to add task to array
const addTask = () => {
    tasks.push(textBox.value);
    alert(tasks);
};

//Function to loop through array, adding each item to ul

addButton.addEventListener("click", addTask)