

const numberOfParticles = 50;
const container = document.body;

for (let i = 0; i < numberOfParticles; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  container.appendChild(particle);

  // Randomize particle properties for a more natural effect
  const randomSize = Math.random() * 4 + 1; // Random size between 1 and 5 pixels
  particle.style.width = `${randomSize}px`;
  particle.style.height = `${randomSize}px`;
  particle.style.backgroundColor = `rgba(0, 0, 0, ${Math.random()})`;
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  particle.style.animationDuration = `${Math.random() * 4 + 2}s`; // Random duration between 2 and 6 seconds
}

function handleScroll() {
    const aboutSection = document.getElementById('about');
    const aboutPosition = aboutSection.getBoundingClientRect().top;

    // Check if the about section is in the viewport
    if (aboutPosition < window.innerHeight / 2) {
      aboutSection.style.opacity = 1;
      // Remove the scroll event listener once the fade-in has occurred
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Add a scroll event listener
  window.addEventListener('scroll', handleScroll);