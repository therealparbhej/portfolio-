// Projects Data
const projects = [
  {
    title: "Calculator App",
    description: "A basic calculator built with HTML, CSS, and JS.",
    link: "https://therealparbhej.github.io/MyCalculator/"
  },
  {
    title: "Quiz-master",
    description: "A basic Quiz Game built with HTML, CSS, and JS.",
    link: "https://quiz-masterbyparbhej.netlify.app/"
  },
  {
    title: "Image → PDF Converter",
    description: "Converts images to PDF format using a simple interface.",
    link: "https://pixtopdfconverter.netlify.app/"
  }
];

// Load Projects
const container = document.getElementById("projects-container");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="project-card-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <a class="project-link" href="${project.link}" target="_blank">View Project <i class="fas fa-arrow-right"></i></a>
    </div>
  `;

  container.appendChild(card);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Smooth Scroll for older browsers or specific offsets (Optional)
// Removed JS smooth scroll as CSS handles it now.


// Form Submission with AJAX
const contactForm = document.querySelector('.contact-form');
const formStatus = document.createElement('div');
formStatus.className = 'form-status';
contactForm.appendChild(formStatus);

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  
  // Loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formStatus.style.display = 'none';

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formStatus.textContent = 'Thank you! Your message has been sent.';
      formStatus.className = 'form-status success';
      contactForm.reset();
    } else {
      const data = await response.json();
      formStatus.textContent = data.errors ? data.errors.map(error => error.message).join(', ') : 'Oops! There was a problem submitting your form';
      formStatus.className = 'form-status error';
    }
  } catch (error) {
    formStatus.textContent = 'Oops! Connection error. Please try again later.';
    formStatus.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
    formStatus.style.display = 'block';
  }
});

// Scroll Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Consolidated Scroll Listener
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  // 1. Sticky Navbar background
  if (scrollY > 50) {
    navbar.style.background = 'rgba(58, 41, 79, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.background = 'rgba(58, 41, 79, 0.95)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }

  // 2. Active Nav Link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });
