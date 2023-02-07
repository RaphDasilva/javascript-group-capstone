import './style.css';
import showMovies from './modules/show-movies';

window.addEventListener('load', async () => {
  await showMovies();
  console.log(showMovies());
});