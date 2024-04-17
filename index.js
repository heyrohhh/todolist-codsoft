let task = document.getElementById('task');
let taskList = document.getElementById('taskList');


function addTask(){

    if(task.value===""|| task.value=== null){
        alert('Please enter task');
        return 
    } else{
                  // creating list for task
   let tasks = document.createElement('li');
   tasks.innerText = task.value;
   tasks.className = "list-group-item d-flex start-5";
   taskList.appendChild(tasks);
   // adding trash icon
   let trash = document.createElement('p');
   trash.className = "fa-solid fa-trash";
   tasks.appendChild(trash);
   // adding edit task icon
   let edit =  document.createElement('p');
   edit.className = "fa-solid fa-pen-to-square";
   tasks.appendChild(edit);
  // adding event to clear task when task is done   
   trash.addEventListener("click", () =>{
       tasks.remove(tasks);
       removeTaskFromLocalStorage(task.value)
   })
   // adding event to edit task
   edit.addEventListener("click", () =>{
    task.value = tasks.innerText;
       tasks.remove(tasks);
      removeTaskFromLocalStorage(task.value)
   })

   storeTaskInLocalStorage(task.value);
  
   task.value = " ";
    }
  
}




// we store tasks in localstorage in array form
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Ensure tasks is always an array
    if (!Array.isArray(tasks)) {
        tasks = [];
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks)
}

function removeTaskFromLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Ensure tasks is always an array
    if (!Array.isArray(tasks)) {
        tasks = [];
    }

    tasks.splice(tasks.indexOf(task), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks)
}