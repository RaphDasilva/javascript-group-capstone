export const commentBtn = document.querySelector('.comment-btn')
export const userName = document.querySelector('.user-name').value
export const commentMsg = document.querySelector('.comment-msg').value

// document.addEventListener('DOMContentLoaded', async () => {
//     await showPopup();
//     const commentMsgs = document.querySelectorAll('.comment-counter');
//     commentMsgs.forEach(async (commentMsg) => {
//       await showComments(commentMsg);
//     });
//   });

commentBtn.addEventListener('click', async () => {
      
      const movieId = commentBtn.getAttribute('data-id');
      await addComment(movieId);
      const commentMsg = commentBtn.parentElement.firstElementChild.nextElementSibling;
      await showComments(commentMsg);
  });