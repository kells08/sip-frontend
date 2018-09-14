console.log("DOM loaded");

const endPoint = 'http://localhost:3000/api/v1/drinks';
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

////////////////////////////////////////////////



const loginBtn = document.querySelector('#login-button')
const loginForm = document.querySelector('.container')
let adduserLogin = false
const submitButton = document.querySelector('.login-form')


loginBtn.addEventListener('click', () => {
  // hide & seek with the form
  addLoginForm = !addLoginForm
  if (addLoginForm) {
    loginForm.style.display = 'block'

  } else {
    loginForm.style.display = 'none'
  }
})

submitButton.addEventListener('submit', handleLoginForm)

function handleLoginForm (e){
  e.preventDefault(e)
  updateLoginForm(e)
  postLoginForm(e)
}


function updatetLoginForm(e){
  let nameInput = document.querySelector('#user-name')
  let studentTrue = document.querySelector('#flatiron-student')
  let studentFalse = document.querySelector('#not-a-flatiron-student')




}

function postLoginForm(e){

}
