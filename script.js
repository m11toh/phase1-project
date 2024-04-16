// The nav bar function section to dropdown the menu navigation options
// the event listener for the the menu bar  
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
 
// function to display the rooom types referencing from the html code 
 function oneRoom(Rooms){
  let card = document.createElement('li')
  card.className = 'card mb-3'
  card.innerHTML =`
      <img src="${Rooms.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${Rooms.Type}</h5>
        <p class="card-text">${Rooms.Availabity}</p>
        <p class="card-text"><small class="text-body-secondary">${Rooms.Price}</small></p>
      </div>
  `
  document.querySelector('#roomInfo').appendChild(card)
 }

// function to get the data with the fetch method from the server to get a response
function getRoom(){
  fetch("https://project-server-si5m.onrender.com/Rooms")
  .then(res => res.json())
  .then(RoomsData => RoomsData.forEach(Rooms => oneRoom(Rooms)))

}

// invoking the function of getRoom 
function initialize(){
  getRoom()
}

initialize()

