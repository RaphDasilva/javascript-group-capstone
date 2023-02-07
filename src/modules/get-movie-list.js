const movies = async () => {
  const lists = await fetch('https://api.tvmaze.com/shows');
  const result = await lists.json();
  const data = result.slice(16, 18);
  console.log(data);
  return data;
};

export default movies;