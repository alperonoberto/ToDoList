const subject = document.querySelector('#title');
const description = document.querySelector('#description');
const btnAddTask = document.querySelector('#btn-add');
const taskContainer = document.querySelector('.task-container');
const gitLink = document.querySelector('#github');

function createTask() {
    const taskDiv = document.createElement('div');
    const taskTitle = document.createElement('p');
    const taskDesc = document.createElement('p');

    taskDiv.className += 'task';

    const elements = document.getElementsByName('relevance');

    for(i = 0; i < elements.length; i++){
        if(elements[i].checked){
            taskTitle.classList += elements[i].value;
        }
    }

    taskTitle.innerHTML = subject.value;
    taskDesc.innerHTML = description.value;

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDesc);

    taskContainer.appendChild(taskDiv);

}

function reset() {
    subject.value = '';
    description.value = '';
}

btnAddTask.addEventListener('click', () => {
    if(subject.value != '' && description.value != ''){
        createTask();
    }else {
        alert('Either subject or description are empty. Please fill them now.')
    }
});

gitLink.addEventListener('click', () => {
    window.open('https://github.com/alperonoberto/');
});