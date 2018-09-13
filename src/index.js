document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/drinks';
  fetch(endPoint)
    .then(res => res.json())
    .then(console.log())
      // json.forEach(drink => {
        // const markup = `
        // <li>
        //   <h3>${drink.name}
        //     <button>edit</button>
        //   </h3>
        // </li>`;

        // document.querySelector('#notes-list').innerHTML += markup;
    //   })
    // );




<<<<<<< HEAD
 
=======

>>>>>>> 3fd6982b24f4a7e62c9f5aa010f5d56d6b2e2570
});