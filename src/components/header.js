import logoWhite from '../imgs/logo.webp';
import { storage } from "../components/storage";

function logo() {
  const containerLogo = document.querySelector('.nav-bar__logo');
  containerLogo.addEventListener('click', () => {
    storage.clear();
  });

  const logo = document.createElement('img');
  logo.setAttribute('src', logoWhite);
  logo.classList.add('logo');
  const logoText = document.createElement('h1');
  logoText.innerText = 'Dewey';
  logoText.classList.add('logo-text');

  containerLogo.appendChild(logo);  
  containerLogo.appendChild(logoText);  
}

export {logo};