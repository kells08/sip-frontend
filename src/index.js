console.log("DOM loaded");

const drinksURL = 'http://localhost:3000/api/v1/drinks?page=1&per_page=2';
const drinksDiv = document.getElementsByClassName("flex")[1];
const viewDrinks = document.getElementById("view-drinks");
const forward = document.getElementById("right-button");
const back = document.getElementById("left-button");
const submitBtn = document.getElementById("submit-drink-button");
const newDrinkForm = document.getElementById("make-drink");
let page = 1;

fetch(drinksURL)
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

forward.addEventListener("click", function(event) {
  event.preventDefault();
  drinksDiv.innerHTML = "";
  event.preventDefault();
  page += 1;

  fetch(`http://localhost:3000/api/v1/drinks?page=${page}&per_page=2`)
    .then(resp => resp.json())
    .then(showAllDrinks)
})

back.addEventListener("click", function(event) {
  event.preventDefault();
  drinksDiv.innerHTML = "";
  page -= 1;

  fetch(`http://localhost:3000/api/v1/drinks?page=${page}&per_page=2`)
    .then(resp => resp.json())
    .then(showAllDrinks)
})

newDrinkForm.addEventListener("submit", makeDrink);

function makeDrink(event) {
  event.preventDefault();
  console.log("clicked submit")

  let name = document.getElementById("drinkName").value;
  let image = "https://images.unsplash.com/photo-1527838016968-2191bb805fc1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjYxNDV9&s=cf3c82c2823ad5249318959ae379a523&auto=format&fit=crop&w=1904&q=80";
  let instructions = document.getElementById("drinkInstructions");
  let likes = 0;
  let ingredient1 = document.getElementById("drinkIng1");
  let ingredient2 = document.getElementById("drinkIng2");
  let ingredient3 = document.getElementById("drinkIng3");
  let ingredient4 = document.getElementById("drinkIng4");
  let ingredient5 = document.getElementById("drinkIng5");
  let ingredient6 = document.getElementById("drinkIng6");

  fetch("http://localhost:3000/api/v1/drinks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      image: image,
      // userid?
      likes: 0
    })
  })
  .then(resp => resp.json())
  .then(showOneDrink)
}




