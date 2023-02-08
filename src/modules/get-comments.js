const getComments = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/comments');
    const theComments = response.json();
    return theComments;
  };
  
  export default getComments;