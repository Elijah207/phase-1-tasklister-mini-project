document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // STEPS
  // indentify what we want ot work with on DOM
  // establish some constants to save us time
  const createTaskForm = document.querySelector
  (`#create-task-form`)
  const newTaskDescription = document.querySelector
    (`#new-task-description`)
  

  createTaskForm.addEventListener(`submit`, (event) => {
    event.preventDefault()
  
    const newTaskDescription = document.querySelector
    (`#new-task-description`)
    console.log(newTaskDescription.value)
    

    const ul = document.querySelector("#tasks")
    const newTask = document.createElement(`li`)
    
    newTask.textContent = newTaskDescription.value
    
    ul.append(newTask)
  })

});