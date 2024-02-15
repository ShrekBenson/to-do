import './styles/_main.css';
import { logo } from './components/header';
import { sideMenu } from './components/side-menu';
import { loadTasks } from './functions/load-tasks';

logo();
sideMenu();
window.addEventListener('DOMContentLoaded', loadTasks('inbox'), {once:true});