/* eslint-disable */
import { movieContainer, displayButtons } from './project-const.js';
import createMovies from './display-movies.js';
import showPopup from './popup.js';

const showMovies = async () => {
  movieContainer.innerHTML = '';
  const movieArr = await createMovies();
  movieArr.forEach((element) => {
    movieContainer.innerHTML += `
     <li class = "movie-${element.id}">
                <img src="${element.img}" alt="${element.name}" width="200px">
                <div>
                    <p class="movie-name">${element.name}</p>
                    <span class = "likes"><i data-id="${element.id}" class="fa-regular fa-thumbs-up like-icon"></i><p data-id = "${element.id}" class = "like-counter"></p></span>
                </div>
                <button class="display-btn" 
                id="${element.id}">Comments</button>
            </li>
     `;
  });
  for (let i = 0; i < displayButtons.length; i += 1) {
    displayButtons[i].onclick = showPopup;
  }
};

export default showMovies;