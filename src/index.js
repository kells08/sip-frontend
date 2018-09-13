console.log("DOM loaded");

const endPoint = 'http://localhost:3000/api/v1/drinks?page=1&per_page=2';
const drinksDiv = document.getElementsByClassName("flex")[1];
const viewDrinks = document.getElementById("view-drinks");

fetch(endPoint)
  .then(res => res.json())
  .then(showAllDrinks)

function showAllDrinks(drinks) {
  drinks.forEach(showOneDrink);
}

function showOneDrink(drink) {
  drinksDiv.innerHTML += `
      <article id=${drink.id}> 
        <div class="image round">
          <img src="${drink.image}" width="200" height="auto" />
        </div>
        <header>
        <h3>${drink.name}</h3>
        </header>
        <p>${drink.likes} Likes</p>
        <footer>
        <a href="#" class="button">Learn More</a>
        </footer>
      </article>
  `
}

viewDrinks.addEventListener("click", showDrinks);

function showDrinks() {
  event.preventDefault();
  window.scrollTo(300, 500);
}








      // json.forEach(drink => {
        // const markup = `
        // <li>
        //   <h3>${drink.name}
        //     <button>edit</button>
        //   </h3>
        // </li>`;