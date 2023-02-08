/* eslint-disable */

import { movieContainer, closeButtons } from './project-const.js';
import createMovies from './display-movies.js';
import showMovies from './show-movies.js';

const showPopup = async (e) => {
  const movieId = e.target.id;
  movieContainer.innerHTML = '';
  const movieArr = await createMovies();
  const movie = movieArr.find((m) => m.id === +movieId);

  if (!movie) {
    return;
  }

  movieContainer.innerHTML += `
        <section class="popup-section">
        <span class="close-btn">X</span>
        <div class="movie-image">
        <img src="${movie.img}" alt="${movie.name}" width="200px">
        </div>
        <h2>${movie.name}</h2>
        <ul class="details">
            <li>${movie.language}</li>
            <li>${movie.genres[0]}</li>
            <li>${movie.genres[1]}</li>
            <li>${movie.genres[2]}</li>
        </ul>
        <ul class="comments-list">
            <h3>Comments(2)</h3>
            <li>Loved this!</li>
            <li>Beautiful show</li>
        </ul>
        <h3>Add a comment</h3>
        <form>
            <input type="text" name="" id="" placeholder="Your name">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Insights"></textarea>
            <button class="comment-btn">Comment</button>
        </form>
    </section>
    `;

  for (let i = 0; i < closeButtons.length; i += 1) {
    closeButtons[i].onclick = showMovies;
  }
};

export default showPopup;