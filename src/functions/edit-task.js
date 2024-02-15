import { storage } from "../components/storage";

export function editTask(key, title, description, dueDate, priority){  
  const data = {
    title,
    description,
    dueDate,
    priority
  }
  const dataString = JSON.stringify(data);
  storage.setItem(key, dataString);

  const task = document.getElementById(key);  
  const taskTitle = task.querySelector('.task__title');
  const taskDescription = task.querySelector('.task__description');
  const taskDueDate = task.querySelector('.task__date');
  const taskPriority = task.querySelector('.task__priority');
  
  taskTitle.innerText = title;
  taskDescription.innerText = description;
  taskDueDate.innerText = `Due date: ${dueDate}`;
  taskPriority.innerText = `Priority: ${priority}`
}