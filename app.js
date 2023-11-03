// Elements
const navBarToggleBtn = document.getElementById('menuBtn');
const navBar = document.querySelector('.nav_text');
const modal = document.querySelector(".modal");
const btn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const emailAcessBtn = document.querySelector('.em');
const emailModal = document.querySelector('.emailModal');

// NavBar toggle
function toggleNav(){
    if(navBar.style.visibility === "visible"){
        navBar.style.visibility = "hidden"
      }else{
        navBar.style.visibility = "visible"
      }

}

navBarToggleBtn.addEventListener('click', toggleNav)

// Modal toggle
btn.onclick = function() {
  modal.style.display = "block";
}
closeBtn.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

// Email modal toggle
emailAcessBtn.onclick = function() {
  if(emailModal.style.display !== "block"){
    emailModal.style.display = "block"
  }else{
    emailModal.style.display = "none"
  }
  
}