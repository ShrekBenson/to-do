import cancel from '../imgs/cancel.svg';
import { addTask } from '../functions/add-task';
import { closeDialog } from '../functions/close-dialog';
import { prioritySelected } from '../functions/check-priority';
import { requiredFields, errorAlert } from '../functions/validate-form';

class dialogRender{

  render(){
    //Containers part
    const fragment = document.createDocumentFragment();
    const fragmentBar = document.createDocumentFragment();
    const fragmentButtons = document.createDocumentFragment();
    const dialogForm = document.createElement('dialog');
    const dialogBar = document.createElement('div');
    const dialogBarTitle = document.createElement('h1');
    const dialogBarButton = document.createElement('img');
    //Inputs part
    const containerFields = document.createElement('div');
    const titleField = document.createElement('input');
    const descriptionField = document.createElement('textarea');
    //Buttons part
    const containerButtons = document.createElement('div');
    const dueDateContainer = document.createElement('div');
    const dueDateLabel = document.createElement('label');
    const dueDateField = document.createElement('input');
    const priorityContainer = document.createElement('div');
    const priorityButtons = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const priorityLow = document.createElement('button');
    const priorityHigh = document.createElement('button');
    const dialogButton = document.createElement('button');

    dialogForm.classList.add('dialog-form');
    dialogBar.classList.add('dialog-form__bar');    
    containerFields.classList.add('dialog-form__container');
    titleField.classList.add('dialog-form__title');
    descriptionField.classList.add('dialog-form__description');
    containerButtons.classList.add('dialog-form__container-buttons');
    dueDateContainer.classList.add('dialog-form__date-container')
    dueDateField.classList.add('dialog-form__due-date');
    priorityContainer.classList.add('dialog-form__priority-container');
    priorityButtons.classList.add('priority-container__buttons');
    priorityLow.classList.add('dialog-form__low');
    priorityHigh.classList.add('dialog-form__high');
    dialogButton.classList.add('dialog-form__button')

    dialogBarTitle.innerText = 'What you have to do?';
    dialogBarButton.setAttribute('src', cancel);
    titleField.setAttribute('placeholder', 'Task title');
    titleField.setAttribute('type', 'text');
    descriptionField.setAttribute('placeholder', 'Description');
    dueDateLabel.setAttribute('for', 'dateTask');
    dueDateField.setAttribute('type', 'date');
   
    titleField.id = 'titleTask';
    descriptionField.id = 'descriptionTask';
    dueDateLabel.innerText = 'Due date:';
    dueDateField.id = 'dateTask';
    priorityLabel.innerText = 'Task priority:'
    priorityLow.innerText = 'Secundary';
    priorityHigh.innerText = 'Urgent';
    priorityLow.value = 'secundary';
    priorityHigh.value = 'urgent';
    dialogButton.innerText = 'Add task';

    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateField);
    priorityButtons.appendChild(priorityLow);
    priorityButtons.appendChild(priorityHigh);
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priorityButtons);
    fragment.appendChild(titleField);
    fragment.appendChild(descriptionField);
    fragmentButtons.appendChild(dueDateContainer);
    fragmentButtons.appendChild(priorityContainer);
    fragmentButtons.appendChild(dialogButton);
    fragmentBar.appendChild(dialogBarTitle);
    fragmentBar.appendChild(dialogBarButton);
    
    containerFields.appendChild(fragment);
    containerButtons.appendChild(fragmentButtons);
    dialogBar.appendChild(fragmentBar);
    dialogForm.appendChild(dialogBar);    
    dialogForm.appendChild(containerFields);
    dialogForm.appendChild(containerButtons);
    
    priorityLow.addEventListener('click', () => {
      priorityLow.classList.toggle('select')
      priorityHigh.classList.remove('select')
    });
    priorityHigh.addEventListener('click', () => {
      priorityLow.classList.remove('select')
      priorityHigh.classList.toggle('select')
    });
    dialogBarButton.addEventListener('click', () => {
      closeDialog(dialogForm)
    })
    dialogButton.addEventListener('click', () => {
      let priority = prioritySelected(priorityLow, priorityHigh);

      if (requiredFields(titleField, descriptionField)) {
        errorAlert(titleField, descriptionField);
      } else{      
        addTask(titleField, descriptionField, dueDateField, priority);
        closeDialog(dialogForm);
      }
    })

    document.body.appendChild(dialogForm);
    dialogForm.showModal();
  }
}

export {dialogRender}