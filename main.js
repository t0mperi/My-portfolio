// Fade in when scroll down

window.addEventListener('scroll', function() {
  var about = document.querySelector('#about');
  var experience = document.querySelector('#experience');
  var projects = document.querySelector('#projects');
  var aboutPosition = about.getBoundingClientRect();
  var experiencePosition = experience.getBoundingClientRect();
  var projectsPosition = projects.getBoundingClientRect();

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
  if(projectsPosition.top < window.innerHeight && projectsPosition.bottom > 0) {
    projects.style.opacity = '1';
  } else {
    projects.style.opacity = '0';
  }
});


var hamburgerMenu = document.querySelector('.hamburger-menu');
var dropdownMenu = document.querySelector('.hamburger-nav');

hamburgerMenu.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

// page scroll and triangle home page

function smoothScroll(target, offset = 0) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + offset;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1500;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutExpo(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

document.querySelectorAll('a.page-scroll, a.triangle').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    const offset = this.classList.contains('page-scroll') ? window.pageYOffset : 0;
    smoothScroll(target, offset);
  });
});

function easeInOutExpo(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  t--;
  return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
}

// Path: main.css