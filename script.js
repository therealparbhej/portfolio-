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
    title: "Weather App",
    description: "Fetches real-time weather data using an API.",
    link: "https://www.google.com/search?q=google+weather&oq=google+weth&gs_lcrp=EgZjaHJvbWUqFAgBEAAYChhGGIACGLEDGMkDGIAEMgYIABBFGDkyFAgBEAAYChhGGIACGLEDGMkDGIAEMgkIAhAAGAoYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgwIBRAAGAoYsQMYgAQyDAgGEAAYChixAxiABDIMCAcQABgKGLEDGIAEMgkICBAAGAoYgAQyCQgJEAAYChiABNIBCTE1NzI2ajBqN6gCCLACAfEF3c5JQEEvTVU&sourceid=chrome&ie=UTF-8"
  }
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-desc">${project.description}</p>
    <a class="project-link" href="${project.link}" target="_blank">View Project</a>
  `;

  container.appendChild(card);
});
