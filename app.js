// Toggle navigation menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  // Burger animation
  burger.classList.toggle('toggle');
});

// Close menu on link click
const navLinks = document.querySelectorAll('.nav-links li');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});

// GSAP Animations Setup
gsap.registerPlugin(ScrollTrigger);

// Animate hero text and image on load
gsap.from('.hero-text h1', {opacity: 0, y: 50, duration: 1, ease: 'power3.out'});
gsap.from('.hero-text .subtitle', {opacity: 0, y: 50, delay: 0.3, duration: 1, ease: 'power3.out'});
gsap.from('.hero-text .btn', {opacity: 0, y: 50, delay: 0.6, duration: 1, ease: 'power3.out'});
gsap.from('.hero-image', {opacity: 0, scale: 0.8, duration: 1.2, ease: 'power3.out'});

// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section.querySelector('h2'), {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
  });
  gsap.from(section.querySelectorAll('p, ul, .projects-grid, .contact-links, form'), {
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    stagger: 0.15,
    ease: 'power3.out',
  });
});

// Dynamic project content (placeholders you can replace)
const frontendProjects = [
  {
    title: "Quiz Web Application",
    description: "Interactive quiz app using HTML, CSS, JS, and LocalStorage to save and review scores.",
    link: "https://qiuz-app-alpha.vercel.app"
  },
  {
    title: "Image Editor",
    description: "An intuitive image editor with filters, and adjustments for quick, high-quality photo editing.",
    link: "https://image-editor-tau-three.vercel.app"
  },
  {
    title: "To-Do List Application",
    description: "To-do list app with login/signup using LocalStorage, enabling personalized task management and persistence.",
    link: "https://to-do-profile-login-signup.vercel.app"
  },
  {
    title: "Weather Application",
    description: "Weather application displaying real-time data with location-based forecasts using APIs and a clean UI.",
    link: "hilarious-rugelach-54a6e2.netlify.app"
  },
  {
    title: "Bubble Game",
    description: "Fun bubble game based on number selection, featuring real-time scoring and countdown timer challenge.",
    link: "stalwart-begonia-997045.netlify.app"
  },
  {
    title: "Shoe Website",
    description: "Interactive shoe website with hover-based 3D rotation, showcasing products with dynamic and engaging visuals.",
    link: "clever-pastelito-59d603.netlify.app"
  }
];

const shopifyProjects = [
  {
    title: "OB Store – Custom Shopify E-commerce Website",
    description: "Custom Shopify store obstore.shop featuring modern design, seamless navigation, and optimized shopping experience.",
    link: "https://obstore.shop/"
  },
  {
    title: "Damascus Steel Blades – Premium Handmade Knife Shopify Store",
    description: "Custom Shopify store for DamascusSteelBlades.com featuring elegant design, product filtering, and secure checkout for premium handmade knives.",
    link: "https://damascussteelblades.com/?srsltid=AfmBOopImpXQUS7Fjf61zuQ15CDq8F_J2Mffv8Y7Ss4uygSuDJ_YufH4"
  }
];

function loadProjects() {
  const frontendContainer = document.getElementById('frontend-projects');
  const shopifyContainer = document.getElementById('shopify-projects');

  frontendProjects.forEach(proj => {
    const projectEl = document.createElement('div');
    projectEl.classList.add('project');
    projectEl.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank" class="btn" aria-label="View project ${proj.title}">View Project</a>
    `;
    frontendContainer.appendChild(projectEl);
  });

  shopifyProjects.forEach(proj => {
    const projectEl = document.createElement('div');
    projectEl.classList.add('project');
    projectEl.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.link}" target="_blank" class="btn" aria-label="View project ${proj.title}">View Project</a>
    `;
    shopifyContainer.appendChild(projectEl);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
});
