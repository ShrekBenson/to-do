import { taskRender } from "../components/task";
import { storage } from "../components/storage";
import { format } from "date-fns";

function loadTasks(time = 'inbox'){
  const taskList = document.querySelector('.task-list');
  if (storage.length === 0) {
    console.log("No hay tareas pendientes");
  } else{
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }

    let keys = Object.keys(storage);
    switch(time){
      case 'inbox':
        keys.sort();
        break; 

      case 'today':
        const today = format(new Date(), 'yyyy-MM-dd');
        const todayTasks = keys.filter(key => {
          const parsedKey = JSON.parse(storage.getItem(key));
          return parsedKey.dueDate === today;
        });
        keys = todayTasks;
        break;

      case 'week':
        const week = format(new Date(), 'ww');
        const weekTasks = keys.filter(key => {
          const parsedKey = JSON.parse(storage.getItem(key));
          const weekKey = format(parsedKey.dueDate, 'ww');
          return weekKey === week;
        });
        keys = weekTasks;
        break;

      default: 
        throw Error('Error, data not found');
        break;
    }
    keys.forEach(key => {
      if(!Array.isArray(JSON.parse(storage.getItem(key)))){
        const dataStored = JSON.parse(storage.getItem(key));
        const task = new taskRender(key, dataStored);
        taskList.appendChild(task.render());
      }
    })    
  }  
}

export {loadTasks};