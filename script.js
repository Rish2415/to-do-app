function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");

    // Create task text
    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"; // Delete icon
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove(); // Removes the task when clicked
    };

    li.appendChild(taskSpan); // Add task text
    li.appendChild(deleteBtn); // Add delete button

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
