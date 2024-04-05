function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if(element.classList.contains("dark-mode") && document.getElementById("checkbox").checked && window.innerWidth<=1200){
    document.getElementById("switch").checked = true;
  }
  else{
    document.getElementById("switch").checked = false;
  }
}


