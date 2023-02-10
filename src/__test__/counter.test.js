import movieCounter from '../modules/counter.js';

describe('test for movie count: ', () => {
  test('5 movies Added', () => {
    document.body.innerHTML = `
        <li class="each-movie"></li>
        <li class="each-movie"></li>
        <li class="each-movie"></li>
        <li class="each-movie"></li>
        <li class="each-movie"></li>
      `;
    const everyMovie = document.querySelectorAll('.each-movie');
    const movies = movieCounter(everyMovie);
    expect(movies).toBe(5);
  });

  test('No Movies were added [0]', () => {
    document.body.innerHTML = '<ul></ul>';
    const allMovies = document.querySelectorAll('.each-movie');
    const movies = movieCounter(allMovies);
    expect(movies).toBe(0);
  });
});