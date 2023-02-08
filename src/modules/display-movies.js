import movies from './get-movie-list.js';

const createMovies = async () => {
  const moviesArr = [];
  const movieItems = await movies();
  movieItems.forEach((element) => {
    const movieObj = {
      id: element.id,
      name: element.name,
      img: element.image.original,
      altTitle: element.name,
      description: element.summary,
      language: element.language,
      genres: element.genres,

    };
    moviesArr.push(movieObj);
  });

  return moviesArr;
};

export default createMovies;