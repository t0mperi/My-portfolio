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



document.querySelectorAll('a.page-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start = null;

      window.requestAnimationFrame(step);

      function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutExpo(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
      }
  });
});

function easeInOutExpo(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  t--;
  return c/2 * (-Math.pow(2, -10 * t) + 2) + b;
}

document.querySelectorAll('a.triangle').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const targetPosition = target.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start = null;

      window.requestAnimationFrame(step);

      function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutExpo(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
      }
  });
});

function easeInOutExpo(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  t--;
  return c/2 * (-Math.pow(2, -10 * t) + 2) + b;
}

// Path: main.css