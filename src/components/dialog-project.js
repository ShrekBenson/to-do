import cancel from '../imgs/cancel.svg';
import { addProject } from '../functions/add-project';
import { closeDialog } from '../functions/close-dialog';

class dialogProjectRender{

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
    //Buttons part
    const containerButtons = document.createElement('div');    
    const dialogButton = document.createElement('button');

    dialogForm.classList.add('dialog-form');
    dialogForm.classList.add('project');
    dialogBar.classList.add('dialog-form__bar');    
    containerFields.classList.add('dialog-form__container');
    titleField.classList.add('dialog-form__title');
    dialogButton.classList.add('dialog-form__button')

    dialogBarTitle.innerText = 'New project';
    dialogBarButton.setAttribute('src', cancel);
    titleField.setAttribute('placeholder', 'Project title');
    titleField.setAttribute('type', 'text');   
   
    titleField.id = 'titleTask';    
    dialogButton.innerText = 'Add task';

    fragment.appendChild(titleField);    
    fragmentButtons.appendChild(dialogButton);
    fragmentBar.appendChild(dialogBarTitle);
    fragmentBar.appendChild(dialogBarButton);
    
    containerFields.appendChild(fragment);
    containerButtons.appendChild(fragmentButtons);
    dialogBar.appendChild(fragmentBar);
    dialogForm.appendChild(dialogBar);    
    dialogForm.appendChild(containerFields);
    dialogForm.appendChild(containerButtons);
        
    dialogBarButton.addEventListener('click', () => {
      closeDialog(dialogForm)
    })
    dialogButton.addEventListener('click', () => {
      addProject(titleField.value);
      closeDialog(dialogForm)
    })

    document.body.appendChild(dialogForm);
    dialogForm.showModal();
  }
}

export {dialogProjectRender}