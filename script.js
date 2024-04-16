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


function getRoom(){
  fetch("http://localhost:3000/Rooms")
  .then(res => res.json())
  .then(RoomsData => RoomsData.forEach(Rooms => oneRoom(Rooms)))

}

function initialize(){
  getRoom()
}

initialize()

