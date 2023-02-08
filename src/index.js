import './style.css';
import showMovies from './modules/show-movies.js';
import showLike from './modules/showLike.js';
import AddLike from './modules/add-like.js';
import showPopup from './modules/popup';
import showComments from './modules/show-comments';

document.addEventListener('DOMContentLoaded', async () => {
  await showMovies();
  const textLikes = document.querySelectorAll('.like-counter');
  textLikes.forEach(async (textLike) => {
    await showLike(textLike);
  });
});




window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('like-icon')) {
    const movieId = likeBtn.getAttribute('data-id');
    await AddLike(movieId);
    const textLike = likeBtn.parentElement.firstElementChild.nextElementSibling;
    await showLike(textLike);
  }
});

