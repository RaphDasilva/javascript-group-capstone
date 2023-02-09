/* eslint-disable */

import { popUpContainer, closeButtons } from './project-const.js';
import createMovies from './display-movies.js';
import showMovies from './show-movies.js';
import { addComment, getComments } from './commentAPI.js';

const showPopup = async (e) => {
  const movieId = e.target.id;
  popUpContainer.style.display = 'flex';
  popUpContainer.innerHTML = '';
  const movieArr = await createMovies();
  const movie = movieArr.find((m) => m.id === +movieId);

  if (!movie) {
    return;
  }

  popUpContainer.innerHTML += `
        <section class="popup-section">
        <span class="close-btn">X</span>
        <div class="movie-image">
        <img src="${movie.img}" alt="${movie.name}">
        </div>
        <div class = "info">
        <h2>${movie.name}</h2>
        <div class="details">
            <div><h5>Language:</h5><p>${movie.language}</p></div>
            <div><h5>Genres:<h5>
            <p>${movie.genres[0]}</p>
            <p>${movie.genres[1]}</p>
            <p>${movie.genres[2]}</p>
            </div>
        </div>
        <h3>Comments(2)</h3>
        <ul class="comments-list">
            
            
        </ul>
        <h3>Add a comment</h3>
        <form>
            <input type="text" name="" id="name" placeholder="Your name" class = "form-info">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Insights" class = "form-info"></textarea>
            <button class="comment-btn">Comment</button>
        </form>
      </div>  
    </section>
    `;

  for (let i = 0; i < closeButtons.length; i += 1) {
    closeButtons[i].onclick = showMovies;
  }
  const inputName = document.querySelector('#name');
  const inputMsg = document.querySelector('#message');
  const commentList = document.querySelector('.comments-list');
  const commentBtn = document.querySelector('.comment-btn');

  const commentFunction = async() => {
     const commentObj =  {
      item_id: movieId,
      username: inputName.value,
      comment: inputMsg.value
      };
      await addComment(commentObj);
      const commentArr = await getComments(movieId);
      commentList.innerHTML = '';
      commentArr.forEach(comm => {
        commentList.innerHTML += `
         <li>
         <span>  ${comm.creation_date} :   </span>
         <span> :${comm.username} :    </span>
         <span>  ${comm.comment}</span>
         </li>
        ` 
      });
      inputName.value = '';
      inputMsg.value = '';
  };
  
  commentBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(inputName.value === '' || inputMsg.value === '') return;
    commentFunction();
  });

 const commentLoader = async() => {
    const commentArr = await getComments(movieId);
      commentList.innerHTML = '';
      commentArr.forEach(comm => {
        commentList.innerHTML += `
         <li>
         <span>  ${comm.username}  </span>
         <span>  ${comm.creation_date}  </span>
         <span>  ${comm.comment}</span>
         </li>
        ` 
      });
  }
  await commentLoader();
};

export default showPopup;