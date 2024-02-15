import editImg from '../imgs/edit.svg';
import deleteImg from '../imgs/delete.svg';
import { storage } from './storage';
import { dialogEditRender } from './dialog-edit';

class taskRender {  

  constructor(key, newTask){
    this.keysStorage = key;
    this.newTask = newTask;
  }

  render(){
    const fragment = document.createDocumentFragment();
    const taskContainer = document.createElement('div');
    const textContainerTitle = document.createElement('div');    
    const taskCheckBox = document.createElement('input')
    const taskTitle = document.createElement('h2');
    const textContainer = document.createElement('div');
    const taskDescription = document.createElement('p');
    const textContainerPrioDate = document.createElement('div');
    const taskDueDate = document.createElement('p');
    const taskPriority = document.createElement('p');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const editIcon = document.createElement('img');
    const deleteIcon = document.createElement('img');
    const editText = document.createElement('p');
    const deleteText = document.createElement('p');

    taskContainer.classList.add('task');
    taskContainer.id = this.keysStorage;
    textContainerTitle.classList.add('text__container-title');
    taskCheckBox.setAttribute('type', 'checkbox');
    taskCheckBox.id = `box_${this.keysStorage}`;
    taskTitle.classList.add('task__title');
    textContainer.classList.add('task__container');
    taskDescription.classList.add('task__description');
    textContainerPrioDate.classList.add('task__container-priodate');
    taskDueDate.classList.add('task__date');
    taskPriority.classList.add('task__priority');
    editButton.classList.add('task__edit');
    deleteButton.classList.add('task__delete');

    taskTitle.innerText = this.newTask.title;
    taskDescription.innerText = this.newTask.description;
    taskDueDate.innerText = `Due date: ${this.newTask.dueDate}`;
    taskPriority.innerText = `Priority: ${this.newTask.priority}`;
    editIcon.setAttribute('src', editImg);
    deleteIcon.setAttribute('src', deleteImg);
    editText.innerText = `Edit`;
    deleteText.innerText = `Delete`;
    
    editButton.appendChild(editIcon);
    deleteButton.appendChild(deleteIcon);
    editButton.appendChild(editText);
    deleteButton.appendChild(deleteText);
    textContainerTitle.appendChild(taskCheckBox);
    textContainerTitle.appendChild(taskTitle);
    textContainerPrioDate.appendChild(taskDueDate);
    textContainerPrioDate.appendChild(taskPriority);
    textContainerPrioDate.appendChild(editButton);
    textContainerPrioDate.appendChild(deleteButton);
    textContainer.appendChild(taskDescription);
    textContainer.appendChild(textContainerPrioDate);
    fragment.appendChild(textContainerTitle);
    fragment.appendChild(textContainer);
    taskContainer.appendChild(fragment);
    
    deleteButton.addEventListener('click', () => {
      taskContainer.remove();
      storage.removeItem(this.keysStorage);
    });
    editButton.addEventListener('click', () => {
      const editDialog = new dialogEditRender(this.keysStorage);
      const data = storage.getItem(this.keysStorage);
      const dataParsed = JSON.parse(data);

      editDialog.render(
        dataParsed.title,
        dataParsed.description,
        dataParsed.dueDate,
        dataParsed.priority
      )
    });
    taskCheckBox.addEventListener('change', () => {
      taskTitle.classList.toggle('completed');
      taskDescription.classList.toggle('completed');
      textContainerPrioDate.classList.toggle('completed');
    })

    return taskContainer;
  }
}

export {taskRender};