const taskList = document.getElementById("taskList"); //Aqui referencio la lista de tareas
const newTaskInput = document.getElementById("newTask"); //Referencia a donde se van a agregar nuevas tareas


//Funcion para agregar una nueva tarea
function addTask() {
    // Toma el texto del input y elimina espacios extra
  const taskText = newTaskInput.value.trim();


  //Verifica si el para agregar la funcion esta vacio, si es asi te manda ese mensaje
  if (taskText === "") {
    alert("Please, ingresa una tarea");
    return;
  }

  //cre el elemento li para la tarea
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText; //Le pone el texto a la tarea

  // Coloca un boton para poder completar alguna tarea
  const completeButton = document.createElement("button");
  completeButton.textContent = "Completar";
  completeButton.classList.add("complete-btn");

  // este es el evento del click para terminar la tarea
  completeButton.onclick = () => {
    taskItem.classList.toggle("completed");
  };

  // Agrega el boton de completar dentro del elemento de la tarea
  taskItem.appendChild(completeButton);
   // Agrega la tarea completa (li) a la lista de tareas (ul)
  taskList.appendChild(taskItem);
   // Limpia el cuadrito donde colocas tarea para despues poder agregar otra
  newTaskInput.value = "";
}
