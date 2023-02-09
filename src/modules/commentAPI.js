const getComments = async (movieId) => {
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/comments?item_id=${movieId}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const comments = await response.json();
  return comments;
};
const addComment = async (comment) => {
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/comments';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  const response = await fetch(URL, options);
  return response.status;
};
export { addComment, getComments };