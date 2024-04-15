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

document.addEventListener('DOMContentLoaded', async(event)=>{
  DisplayRooms(Rooms)
}) 

function DisplayRooms(Rooms){
  
  const RoomCard = Rooms.map((Rooms)=>{
    return`
        <img src="${Rooms.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${Rooms.Type}</h5>
                  <p class="card-text">${Rooms.Availabity}</p>
                  <p class="card-text"><small class="text-body-secondary">${Rooms.Price}</small></p>
                </div>
    `
  }) 

  const roomcontainer = document.getElementById("roomInfo")
  roomcontainer.innerHTML = RoomCard
}

DisplayRooms(Rooms);



fetch("http://localhost:3000/Rooms")
.then(res => res.json())
.then(Rooms => {
  console.log(Rooms);
})


