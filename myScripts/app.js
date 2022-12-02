// DECLARE UI VARS
const taskInput = document.querySelector("#taskID");
const submitButton = document.querySelector("#submitBtn");
const taskList = document.querySelector(".task-list");
const ClearTaskBtn = document.querySelector("#klearTask");
//CREATING EVENT FOR TASK INPUT AFTER SUBMITTED

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    const Li = document.createElement("li");
    Li.className = "list-item";

    Li.innerHTML = taskInput.value;

    // CREATE LINK ELEMENT
    const Link = document.createElement("a");
    // ADD CLASS TO LINK
    Link.className = "del";
    // ADD ICON HTML TO LINK
    Link.innerHTML = '<i class="fas fa-window-close"></i>';

    // APPEND LINK TO LI
    Li.appendChild(Link);

    console.log(Li);
    taskList.appendChild(Li);
  }

  // TRING TO CREATE LINK TO REMOVE INDIVIDUAL TASK
  // const Link = document.createElement("a");
  // Link.innerHTML = "<i class='far fa-window-close'></i> ";
  // Li.appendChild(Link);
  // Link.style.color = "red";
});

// EVENT LISTENER FOR CLEARING ALL TASKS

ClearTaskBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
