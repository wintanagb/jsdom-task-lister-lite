document.addEventListener("DOMContentLoaded", () => {
  // your code here
  handleForm()
})

function renderTaskItem(e) {
  const taskInputValue = e.target.querySelector('#new-task-description').value
  // get the list
  const taskList = document.querySelector('#tasks')
  // create li element
    // change innerText to taskInputValue
  const newLi = document.createElement('li') 
  newLi.innerText = taskInputValue
  colorByPriority(e, newLi)
  taskList.append(newLi)
  // add delete button for each li
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Delete'
  deleteButton.id = `delete-${taskInputValue}`
  deleteButton.className = "delete-button"

  const username = e.target.querySelector("#user-name").value
  newLi.append(deleteButton)
  newLi.append(username)
  handleDeleteButton(newLi, deleteButton, taskList)
}

function handleForm() {
  const form = document.querySelector('#create-task-form')
  // add dropdown list with high, medium, low priority
  addDropdown(form)
  // add a user name field
  addUserField(form)
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    renderTaskItem(e)
    e.target.reset()
  })
}

function handleDeleteButton(newLi, deleteButton, taskList) {
  deleteButton.addEventListener('click', function(){
    taskList.remove(newLi)
  })
}

function addUserField(form) {
  const label = document.createElement('label')
  label.innerText = "User:"
  form.append(label)
  const userField = document.createElement('input')
  userField.id = "user-name"
  userField.placeholder = "Enter Your Name"
  form.append(userField)
}

function addDropdown(form) {
  const label = document.createElement('label')
  label.innerText = "Priority:"
  form.append(label)
  const select = document.createElement('select')
  const highPriority = document.createElement('option')
  highPriority.innerText = "High"
  const mediumPriority = document.createElement("option")
  mediumPriority.innerText = "Medium"
  const lowPriority = document.createElement("option")
  lowPriority.innerText = "Low"
  select.append(lowPriority, mediumPriority, highPriority)
  form.append(select)
}

function colorByPriority(e, newLi) {
  const priority = e.target.querySelector('select').value
  if (priority === "High") {
    newLi.style.color = 'red'
  } else if (priority === "Medium") {
    newLi.style.color = 'yellow'
  } else if (priority === "Low") {
    newLi.style.color = 'green'
  }
}


