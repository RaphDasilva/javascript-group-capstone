import getLike from './get-like.js';

const showLike = async (textLike) => {
  const movieId = textLike.getAttribute('data-id');
  const likesList = await getLike();
  const numberLikes = likesList.filter((likeObj) => likeObj.item_id === movieId);
  if (numberLikes.length > 0) {
    textLike.textContent = `${numberLikes[0].likes} Likes`;
  }
};

export default showLike;