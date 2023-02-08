import movieContainer from './project-const.js';
import createMovies from './display-movies.js';

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
                <button id = ${element.id}>Comments</button>
            </li>
     `;
  });
};

export default showMovies;