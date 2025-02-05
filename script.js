

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var checkbox = document.getElementById("dark-mode-toggle");
  checkbox.checked = element.classList.contains("dark-mode");
  localStorage.setItem("darkMode", element.classList.contains("dark-mode"));
}

// On page load, check local storage and apply dark mode if necessary
document.addEventListener("DOMContentLoaded", function() {
  var darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-mode-toggle").checked = true;
  }
});


// // PROJECTS SECTION

// //step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 1000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }

// CODING PROFILE SECTION

// CODING PROFILE SECTION

// CODING PROFILE SECTION

// Get the container and links
const platformLinks = document.querySelectorAll('.platform-link');

// Add an event listener to each link
platformLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const platform = link.getAttribute('data-platform');
    const username = link.getAttribute('data-username');
    const domainName = link.getAttribute('data-domain');
    
    // Use the platform name to construct the dashboard URL
    let dashboardUrl;
    if (platform === 'github'){   
      dashboardUrl = `https://github.com/${username}`;
    } 
    else if(platform === 'hackerrank'){
      dashboardUrl = `https://www.hackerrank.com/${username}`;
    }
    else if(platform === 'gfg'){
      dashboardUrl = `https://www.geeksforgeeks.org/${username}/`;
    }else {
      dashboardUrl = `https://www.${platform}.${domainName}/${username}`;
    }
    
    // Open the URL in a new tab
    window.open(dashboardUrl, '_blank');
  });
});

function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Your form submission logic here (if needed)
  // Submit the form to Formspree
  document.getElementById("feedbackForm").submit();
  
  // Reset the form
  document.getElementById("feedbackForm").reset();
  
  
}