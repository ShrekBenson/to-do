import inbox from '../imgs/inbox.svg';
import today from '../imgs/today.svg';
import thisWeek from '../imgs/this-week.svg';
import projects from '../imgs/projects.svg';
import add from '../imgs/add.svg';
import projectsArrow from '../imgs/projects.png';
import { dialogRender } from './dialog-task';
import { loadTasks } from '../functions/load-tasks';
import { storage } from './storage';

export function sideMenu(){
  const icons = [inbox, today, thisWeek, projects];
  const listContainer = document.querySelector('.task-list');
  const listItem = document.querySelectorAll('.side-menu__opt');
  const optInbox = document.querySelector('.side-menu__opt.inbox');
  const optToday = document.querySelector('.side-menu__opt.today');
  const optWeek = document.querySelector('.side-menu__opt.week');
  const buttonProjects = document.querySelector('.projects');
  const buttonProjectsArrow = document.createElement('img');
  const addTaskButton = document.querySelector('.add-task');
  const addTaskImg = document.querySelector('.add-task__img');

  listItem.forEach((item, index) => {
    const icon = document.createElement('img');
    icon.setAttribute('src', icons[index]);
    item.insertBefore(icon, item.querySelector('h2'));
  });
  optInbox.addEventListener('click', () => {
    loadTasks()
  });
  optToday.addEventListener('click', () => {
    loadTasks('today')
  });
  optWeek.addEventListener('click', () => {
    loadTasks('week')
  });

  buttonProjectsArrow.setAttribute('src', projectsArrow);
  buttonProjectsArrow.classList.add('arrow');
  buttonProjects.appendChild(buttonProjectsArrow);
  buttonProjects.addEventListener('click', () => {
    buttonProjectsArrow.classList.toggle('show');    
  });

  addTaskImg.setAttribute('src', add);
  addTaskButton.addEventListener('click', () => {
    const newDialog = new dialogRender();
    newDialog.render();
  });
}