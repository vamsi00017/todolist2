let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value === '') {
        alert("Please enter a task");
    } else {
        let task = document.createElement("li");
        let deleteBtn = document.createElement("button");
        task.appendChild(document.createTextNode(taskInput.value));
        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.classList.add("deleteBtn");
        task.appendChild(deleteBtn);
        taskList.appendChild(task);
        taskInput.value = '';
    }
}

taskInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteBtn")) {
        let task = event.target.parentNode;
        taskList.removeChild(task);
    }
});
