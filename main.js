window.addEventListener('scroll', function() {
  var about = document.querySelector('#about');
  var experience = document.querySelector('#experience');
  
  var aboutPosition = about.getBoundingClientRect();
  var experiencePosition = experience.getBoundingClientRect();


  if(aboutPosition.top < window.innerHeight && aboutPosition.bottom > 0) {
    about.style.opacity = '1';
  } else {
    about.style.opacity = '0';
  }
  if(experiencePosition.top < window.innerHeight && experiencePosition.bottom > 0) {
    experience.style.opacity = '1';
  } else {
    experience.style.opacity = '0';
  }
});


var hamburgerMenu = document.querySelector('.hamburger-menu');
var dropdownMenu = document.querySelector('.hamburger-nav');

hamburgerMenu.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

// Path: main.css