// Elements
const navBarToggleBtn = document.getElementById('menuBtn');
const navBar = document.querySelector('.nav_text');
const modal = document.querySelector(".modal");
const btn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const emailBtn = document.querySelector('.em');

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

// Copy to clipboard

function copyToClipboard() {
  const email = 'chasehaye.dev@gmail.com';
  navigator.clipboard.writeText(email)
  alert('"chasehaye.dev@gmail.com" copid to clipboard!')
}

emailBtn.addEventListener('click', copyToClipboard)
