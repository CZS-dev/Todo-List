// SELECTORS

const Input = document.getElementById("input");
const Button = document.getElementById("button");
const List = document.getElementById("list");

// EVENT LISTENER

Button.addEventListener("click", createTasks);

// CREATE TASKS

function createTasks(e) {
  e.preventDefault();
  if (Input.value === "") {
    alert("Write a task!");
  } else {
    const newTask = document.createElement("li");
    newTask.innerText = Input.value;
    newTask.className = "li";
    List.appendChild(newTask);
    Input.value = "";

    // TRASH BUTTON

    const trashdButton = document.createElement("button");
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
    newTask.appendChild(trashdButton);

    // CHECKED TASKS

    newTask.addEventListener("click", (e) =>
      newTask.classList.toggle("checked")
    );

    // REMOVE TASKS

    trashdButton.addEventListener("click", (e) => List.removeChild(newTask));
  }
}
