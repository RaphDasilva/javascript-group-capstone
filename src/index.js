import './style.css';
import showMovies from './modules/show-movies';
import showPopup from './modules/popup';
import displayButton from './modules/project-const'

displayButton.addEventListener('click', showPopup)
window.addEventListener('load', async () => {
  await showMovies();
  console.log(showMovies());
});