var initialTask =['Business meeting', 'Appointment with Alice', 'flowers to pick up'];
let $taskList;
let $newTaskName;
let $addTaskButton;

function primary(){

    $taskList = document.querySelector('#task-list');
    $taskList.classList.add('task--open');
    $newTaskName = document.getElementById('add-task-value');
    $addTaskButton = document.getElementById('add-button');
    $addTaskButton.addEventListener('click', addButtonClickHandler);
    $taskList.addEventListener('click', obiektClickHandler);

    initialTask.forEach((element) => { 
        addTasks($taskList, element)
    })
}

function obiektClickHandler(event){

    if(event.target.classList.contains('edit-task')){
        obiektEditHandler(event);
    }
    else if(event.target.classList.contains('accept')){
        acceptChangeHandler(event);
    } else {
        if(event.target.tagName ==='li'){
            event.target.classList.toggle('task--finished');
        } else {
            event.target.parentElement.classList.toggle('task--finished');
        }
    }
}




function acceptChangeHandler(event){
   let $inputChange= event.target.parentElement.getElementsByClassName('change')[0];
   let $acceptBtn = event.target.parentElement.getElementsByClassName('accept')[0];
   $inputChange.style.display="none";
   $acceptBtn.style.display="none";

   let $editBtn= event.target.parentElement.getElementsByClassName('edit-task')[0];
   let $textElement= event.target.parentElement.getElementsByClassName('element-text')[0];
   let $removeBtn = event.target.parentElement.getElementsByClassName('remove')[0];
   $textElement.textContent= $inputChange.value;
   $textElement.style.display="";
   $editBtn.style.display="inline-block";
   $removeBtn.style.display="inline-block";
    debugger;
}
function obiektEditHandler(event){
    $textElement= event.target.parentElement.getElementsByClassName('element-text')[0];
    $inputChange= event.target.parentElement.getElementsByClassName('change')[0];
    $acceptBtn = event.target.parentElement.getElementsByClassName('accept')[0];
    $removeBtn = event.target.parentElement.getElementsByClassName('remove')[0];
   let oldInput=$textElement.textContent;
   $textElement.style.display="none";
   event.target.style.display="none";
   $removeBtn.style.display ="none";
   $inputChange.value = oldInput;
   $inputChange.style.display="inline-block";
   $acceptBtn.style.display="inline-block";
 
   
  
   debugger;
}

function removeElement(deletes) {
    var deletes = document.querySelectorAll('.remove')
    deletes.forEach(element => {element= this.parentNode
    element.remove()
})
}
removeElement();



function addTasks (list, name){

    let elementText= document.createElement('span');
    let newElement = document.createElement('li');
//adding new edit button element
    elementText.textContent=name;
    elementText.classList.add('element-text');

    let editButton = document.createElement('button');//nowy element button
    editButton.textContent='Edit'; //nadany tekst elementu button
    editButton.addEventListener('click', obiektEditHandler);

    let acceptButton = document.createElement('button');//nowy ukryty element accept button
    acceptButton.textContent='Accept'; 
    acceptButton.classList.add('accept');
    acceptButton.style.display='none';


    let changeInput = document.createElement('input');
    changeInput.textContent= 'change your task'; 
    changeInput.classList.add('change');
    changeInput.style.display='none';

    let removeButton = document.createElement('button');//nowy element button
    removeButton.textContent='Delete'; //nadany tekst elementu button
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', removeElement);

//Ikony listy

    let taskListIcon = document.createElement('i');
    taskListIcon.classList.add ('icon-basic-todolist-pen');
    editButton.classList.add('edit-task');

    //attaching elements to element
    newElement.appendChild(elementText);

  //Edit, Accept, buttons  
    newElement.appendChild(acceptButton);
    newElement.appendChild(changeInput);
    newElement.appendChild(editButton);
//ikona dołączona do listy
   newElement.insertBefore(taskListIcon, newElement.firstChild);
   newElement.insertBefore(removeButton, newElement.lastChild);
// nowy element do listy poczatkowej
    list.appendChild(newElement);
}

//pobieranie wartości
function addButtonClickHandler(){
    let newTask= $newTaskName.value;
//dodanie wartości do funkcji addTasks
    if(newTask) {
        addTasks($taskList, newTask);
        $newTaskName.value ="";
    }
      
}

document.addEventListener('DOMContentLoaded', primary);



