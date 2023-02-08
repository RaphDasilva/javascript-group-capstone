import getComments from './get-comments.js';

const showComments = async (commentMsg) => {
  const movieId = commentMsg.getAttribute('data-id');
  const commentsList = await getComments();
  const numberComments = commentsList.filter((commentsObj) => commentsObj.item_id === movieId);
  if (numberComments.length > 0) {
    commentMsg.textContent = `${numberComments[0].comments} Comments`;
  }
};

export default showComments;