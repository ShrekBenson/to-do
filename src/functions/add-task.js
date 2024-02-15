import { task, taskProject } from "./class-task";
import { taskRender } from "../components/task";
import { storage } from "../components/storage";
import { format } from "date-fns";

export function addTask(title, description, dueDate, priority){
  const taskList = document.querySelector('.task-list');
  const newTask = new task(
    title.value,
    description.value,
    dueDate.value,
    priority
  );  
  const keyData = format(new Date(), 'yyyyMMddHHmmss');
  const stringData = JSON.stringify(newTask);
  
  storage.setItem(keyData, stringData);
  const retrieveData = storage.getItem(keyData);
  const taskElement = new taskRender(keyData, JSON.parse(retrieveData));
  console.log(`Data currently stored:\n${retrieveData}`);
    
  taskList.appendChild(taskElement.render());
}