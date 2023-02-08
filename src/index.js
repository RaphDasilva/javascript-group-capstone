import './style.css';
import showMovies from './modules/show-movies.js';

window.addEventListener('load', async () => {
  await showMovies();
});