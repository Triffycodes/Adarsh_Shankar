

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


// PROJECTS SECTION

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// CODING PROFILE SECTION

// Get the container and links
const platformLinks = document.querySelectorAll('.platform-link');
const dashboardContainer = document.querySelector('.dashboard-container');
const iframeContainer = document.querySelector('.iframe-container');

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
      dashboardUrl = 'https://github.com/Triffycodes';
    } 
    else if(platform === 'hackerrank'){
      dashboardUrl = 'https://www.hackerrank.com/profile/TriffyCodes';
    }
    else if(platform === 'gfg'){
      dashboardUrl = 'https://www.geeksforgeeks.org/user/triffycodes/';
    }else {
      dashboardUrl = `https://www.${platform}.${domainName}/${username}`;
    }
    
    // Create an iframe to display the dashboard
    const iframe = document.createElement('iframe');
    iframeContainer.classList.add('iframe-container');
    iframe.src = dashboardUrl;
    iframe.frameBorder = '0';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.setAttribute('style', 'overflow: hidden; width: 100%; height: 70vh;');
    
    // Add the iframe to the dashboard container
    dashboardContainer.innerHTML = '';
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.marginBottom = '20px';
    dashboardContainer.appendChild(buttonContainer);
    dashboardContainer.appendChild(iframe);

    // Show the dashboard container
    dashboardContainer.style.display = 'block';
    
    // Add the expanded class to the iframe container
    iframeContainer.classList.add('expanded');
    
    // If GitHub, add a message and button
    if (platform === 'github' || platform === 'hackerrank' || platform === 'gfg') {
      const message = document.createElement('p');
      message.textContent = "Ohh snap!, they don't want me to show my progress :( click here!";
      buttonContainer.appendChild(message);
      const br = document.createElement('br'); // Add a line break
      buttonContainer.appendChild(br);
      const button = document.createElement('button');
      button.textContent = 'Visit Site';
      button.style.background = 'linear-gradient(to right, #ff69b4, #ff97c9)';
      button.style.marginLeft = '1rem';
      button.style.color = '#fff';
      button.style.padding = '10px 20px';
      button.style.border = 'none';
      button.style.borderRadius = '10px';
      button.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
      button.style.cursor = 'pointer';
      buttonContainer.appendChild(button);
      button.style.transition = 'transform 0.5s';
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.3)';
      });
      
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
      
      
      button.addEventListener('click', () => {
        window.location.href = dashboardUrl;
      });
    }
  });
});
