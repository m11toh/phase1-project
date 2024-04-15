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


// document.addEventListener('DOMContentloaded',(event) => {
//   getRooms();
 
// })

// function getRooms(){
//   const rommTypes = document.getElementById('rooms')
//   fetch("http://localhost:3000/Rooms").then(response => response.json())
//   .then((data) => {
//        data.forEach(rooms =>{
//            const list = document.createElement('li')
//            list.innerText = Rooms.Type;

//            list.addEventListener('click',()=>{
//                displayinfo(rooms)
//            })

//            movielist.appendChild(list);

//            console.log(Rooms.Type)
//        })
//   }
  // )
  
       
