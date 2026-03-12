let tasks = [];

function addTask() {

    const name = document.getElementById("taskName").value;
    const priority = document.getElementById("priority").value;

    if(name === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        name: name,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    document.getElementById("taskName").value = "";

    displayTasks(tasks);
}

function displayTasks(taskArray){

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    taskArray.forEach((task,index) => {

        const li = document.createElement("li");

        li.innerHTML =
        task.name + " (" + task.priority + ") " +
        (task.completed ? "[Completed]" : "[Pending]") +
        `<button onclick="completeTask(${index})">Complete</button>
        <button onclick="deleteTask(${index})">Delete</button>`;

        list.appendChild(li);
    });
}

function completeTask(index){

    tasks[index].completed = true;

    displayTasks(tasks);
}

function deleteTask(index){

    tasks.splice(index,1);

    displayTasks(tasks);
}

function filterTasks(type){

    if(type === "all"){
        displayTasks(tasks);
    }

    if(type === "completed"){
        const completedTasks = tasks.filter(task => task.completed);
        displayTasks(completedTasks);
    }

    if(type === "pending"){
        const pendingTasks = tasks.filter(task => !task.completed);
        displayTasks(pendingTasks);
    }
}