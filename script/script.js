var initialTask =['Business meeting', 'Appointment at 19', 'flowers to pick up'];
let $taskList;
let $newTaskName;
let $addTaskButton;

function primary() {
    $taskList = document.querySelector('#task-list');
    $taskList.classList.add('task--open');
    $newTaskName = document.getElementById('add-task-value');
    $addTaskButton = document.getElementById('add-button');
    $addTaskButton.addEventListener('click', addButtonClickHandler);
    $taskList.addEventListener('click', listClickManager);
    initialTask.forEach((element) => { 
        addTasks($taskList, element)
    })
}

function listClickManager(event) {

    if(event.target.classList.contains('edit-task')) {
        editHandler(event);
    }
    else if(event.target.classList.contains('accept')) {
        acceptChangeHandler(event);   
    }
    else if(event.target.classList.contains('cancel')) {
        cancelChangeHandler(event);    
    }
    else if(event.target.classList.contains('remove')) {
        deleteHandler(event);    
    }
    else {
        if(event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        } 
            else { 
                event.target.parentElement.classList.toggle('completed');
            }
        }
    }

function acceptChangeHandler(event) {
   let $inputChange= event.target.parentElement.getElementsByClassName('change')[0];
   let $acceptBtn = event.target.parentElement.getElementsByClassName('accept')[0];
   $inputChange.style.display="none";
   $acceptBtn.style.display="none";

   let $editBtn= event.target.parentElement.getElementsByClassName('edit-task')[0];
   let $textElement= event.target.parentElement.getElementsByClassName('element-text')[0];
   let $removeBtn = event.target.parentElement.getElementsByClassName('remove')[0];
   let $cancelBtn = event.target.parentElement.getElementsByClassName('cancel')[0];
   $textElement.textContent= $inputChange.value;
   $textElement.style.display="";
   $editBtn.style.display="inline-block";
   $removeBtn.style.display="inline-block";
   $cancelBtn.style.display ="none";
}

function cancelChangeHandler(event) {
    let $inputChange= event.target.parentElement.getElementsByClassName('change')[0];
    let $acceptBtn = event.target.parentElement.getElementsByClassName('accept')[0];
    let $editBtn= event.target.parentElement.getElementsByClassName('edit-task')[0];
    let $removeBtn = event.target.parentElement.getElementsByClassName('remove')[0];
    let $textElement= event.target.parentElement.getElementsByClassName('element-text')[0];
    let $cancelBtn = event.target.parentElement.getElementsByClassName('cancel')[0];
    $inputChange.style.display ="none";
    $acceptBtn.style.display ="none";
    $cancelBtn.style.display ="none";
    $removeBtn.style.display ="inline-block";
    $textElement.style.display = "inline-block";
    $editBtn.style.display = "inline-block";
}

function editHandler(event) {
   $textElement= event.target.parentElement.getElementsByClassName('element-text')[0];
   $inputChange= event.target.parentElement.getElementsByClassName('change')[0];
   $acceptBtn = event.target.parentElement.getElementsByClassName('accept')[0];
   $cancelBtn = event.target.parentElement.getElementsByClassName('cancel')[0];
   $removeBtn = event.target.parentElement.getElementsByClassName('remove')[0];
   let oldInput=$textElement.textContent;
   $textElement.style.display="none";
   event.target.style.display="none";
   $removeBtn.style.display ="none";
   $inputChange.value = oldInput;
   $inputChange.style.display="inline-block";
   $acceptBtn.style.display="inline-block";
   $cancelBtn.style.display="inline-block";
}

function deleteHandler(event) {
    let deletes = event.target.parentElement;
    deletes.remove();
}


function addTasks (list, name) {

    let elementText= document.createElement('span');
    let editButton = document.createElement('button');
    let newElement = document.createElement('li');
    elementText.textContent=name;
    elementText.classList.add('element-text');
    editButton.textContent='Edit'; 
    editButton.addEventListener('click', editHandler);

    let acceptButton = document.createElement('button');
    acceptButton.textContent='Accept'; 
    acceptButton.classList.add('accept');
    acceptButton.style.display='none';

    let cancelButton = document.createElement('button');
    cancelButton.textContent='Cancel'; 
    cancelButton.classList.add('cancel');
    cancelButton.style.display='none';

    let changeInput = document.createElement('input');
    changeInput.textContent= 'change your task'; 
    changeInput.classList.add('change');
    changeInput.style.display='none';

    let removeButton = document.createElement('button');
    removeButton.textContent='Delete'; 
    removeButton.classList.add('remove');
   
    let taskListIcon = document.createElement('i');
    taskListIcon.classList.add ('icon-basic-todolist-pen');
    editButton.classList.add('edit-task');
    newElement.appendChild(elementText);
 
    newElement.appendChild(acceptButton);
    newElement.appendChild(cancelButton);
    newElement.appendChild(changeInput);
    newElement.appendChild(editButton);
    newElement.insertBefore(taskListIcon, newElement.firstChild);
    newElement.insertBefore(removeButton, newElement.lastChild);
    list.appendChild(newElement);
}

function addButtonClickHandler() {
    let newTask= $newTaskName.value;
    if(newTask) {
        addTasks($taskList, newTask);
        $newTaskName.value ="";
    }
      
}

document.addEventListener('DOMContentLoaded', primary);



