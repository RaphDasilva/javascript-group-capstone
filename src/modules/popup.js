import movieContainer from './project-const';
import createMovies from './display-movies';


const showPopup = (element) => {
  console.log('run')
  
  movieContainer.innerHTML += `
            <section class="popup-section">
            <span class="close-btn">X</span>
            <div class="movie-image">
            <img src="${element.img}" alt="${element.name}" width="200px">
            </div>
            <h2>${element.name}</h2>
            <ul class="details">
                <li>Fuel: Titanium</li>
                <li>Fuel: Titanium</li>
                <li>Fuel: Titanium</li>
                <li>Fuel: Titanium</li>
            </ul>
            <ul class="comments-list">
                <h3>Comments(2)</h3>
                <li>Fuel: Titanium</li>
                <li>Fuel: Titanium</li>
            </ul>
            <h3>Add a comment</h3>
            <form>
                <input type="text" name="" id="" placeholder="Your name">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Insights"></textarea>
                <button>Comment</button>
            </form>
        </section>
     `;
  };



export default showPopup;