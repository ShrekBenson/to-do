function requiredFields(title, description) {
  if (title.value === '' || description.value === '') {
    return true;
  }
}
function errorAlert(title, description) {
  title.classList.add('error');
  description.classList.add('error');  
  title.setAttribute('placeholder', 'Write a title to your task');
  description.setAttribute('placeholder', 'Write the details of your task');

  setTimeout(() => {    
    title.classList.remove('error');
    description.classList.remove('error');
    title.setAttribute('placeholder', 'Task title');
    description.setAttribute('placeholder', 'Description');
  }, 3000);
  return;
}

export {requiredFields, errorAlert};