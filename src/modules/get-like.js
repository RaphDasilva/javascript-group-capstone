const getLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/likes');
  const myLikes = response.json();
  return myLikes;
};

export default getLike;