import movieContainer from './project-const';
import createMovies from './display-movies';

const showMovies = async () => {
  movieContainer.innerHTML = '';
  const movieArr = await createMovies();
  movieArr.forEach((element) => {
    movieContainer.innerHTML += `
     <li class = "movie-${element.id}">
                <img src="${element.img}" alt="${element.name}" width="200px">
                <div>
                    <p class="movie-name">${element.name}</p>
                    <span><i data-id="${element.id}" class="fa-regular fa-heart like-icon"></i> 5 likes</span>
                </div>
                <button id = ${element.id}>Comments</button>
            </li>
     `;
  });
};

export default showMovies;