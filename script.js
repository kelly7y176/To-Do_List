function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskDateTimeInput = document.getElementById("task-date-time");
  var taskDescriptionInput = document.getElementById("task-description");
  var taskList = document.getElementById("task-list");

  var taskText = taskInput.value.trim();
  var taskDateTime = taskDateTimeInput.value.trim();
  var taskDescription = taskDescriptionInput.value.trim();

  if (taskText !== "") {
    var taskItem = document.createElement("li");

    var taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("click", function() {
      this.parentNode.classList.toggle("checked");
    });

    var taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    var taskDetailsDiv = document.createElement("div");
    taskDetailsDiv.classList.add("task-details");

    var taskDateTimeLabel = document.createElement("span");
    taskDateTimeLabel.textContent = taskDateTime;

    var taskDescriptionLabel = document.createElement("span");
    taskDescriptionLabel.textContent = taskDescription;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button"); 
    deleteButton.addEventListener("click", function() {
      this.parentNode.parentNode.remove();
    });

    taskDetailsDiv.appendChild(taskDateTimeLabel);
    taskDetailsDiv.appendChild(taskDescriptionLabel);

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskDetailsDiv);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskDateTimeInput.value = "";
    taskDescriptionInput.value = "";
  }
}