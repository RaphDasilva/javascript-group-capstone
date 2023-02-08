const addComment = async (id) => {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uCGtrIcBjcKSP9zRRkp4/comments', {
      method: 'POST',
      body: JSON.stringify({
            item_id: `{id}`,
            username: `{userName}`,
            comment: `{commentText}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
  
  export default addComment;