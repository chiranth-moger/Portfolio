document.addEventListener('DOMContentLoaded', function () {
  const projectsContainer = document.getElementById('projects-container');
  const achievementsContainer = document.getElementById('achievements-container');
  const projectModal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalTechnologies = document.getElementById('modal-technologies');
  const closeModal = document.getElementById('close-modal');
  const imageURL = "https://images.unsplash.com/photo-1517594632980-535c0c33173a?auto=format&fit=crop&w=1470&q=80";

  const projects = [
    {
      id: "project1",
      title: "Home Automation",
      description: "The system monitors indoor conditions by collecting data on harmful gases, temperature, and humidity using an ESP32 sensor, displaying real-time insights on a website.",
      detailedDescription: "The Home Automation system is designed to enhance home safety and comfort. It uses an ESP32 microcontroller to collect real-time data on various environmental factors including harmful gas levels, temperature, and humidity. The system features a responsive web interface that displays this information in an easy-to-understand format with charts and alerts. If dangerous levels of gas are detected, the system immediately triggers both visual and audible alarms, and can send notifications to the homeowner's mobile device. The project demonstrates proficiency in IoT development, sensor integration, and real-time data processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      technologies: ["HTML", "CSS", "JavaScript","sensor", "Data-Visualization"]
    },
    {
      id: "project2",
      title: "Weather Application",
      description: "A weather website that displays current weather conditions and forecasts for any location.",
      detailedDescription: "This comprehensive Weather Application provides users with accurate and up-to-date weather information for any location worldwide. The app features current conditions, hourly forecasts, and a 7-day outlook, all presented through an intuitive and visually appealing interface. Users can search for locations, save favorites, and receive notifications about severe weather conditions. The application utilizes multiple weather APIs to ensure reliability and cross-validates data for accuracy. The responsive design ensures a seamless experience across desktop and mobile devices.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "API", "Data-Visualization"]
    },
    {
      id: "project3",
      title: "My Portfolio",
      description: "A showcase of my web development projects and technical skills with a modern, responsive design.",
      detailedDescription: "This portfolio website serves as a comprehensive showcase of my development journey, technical capabilities, and completed projects. Built with modern web technologies, it features a responsive design that works seamlessly across all devices. The site includes detailed project descriptions, technology stacks used, and direct links to live demos and source code repositories. Additionally, the portfolio highlights my skills, certifications, and professional experience in an engaging and interactive manner. The clean, minimalist design focuses on content presentation while demonstrating my frontend development and UI/UX abilities.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind-CSS"]
    },
    {
      id: "project4",
      title: "Agile Air",
      description: "An innovative system designed to combat urban pollution by converting CO₂ into O₂ while purifying the air. This solution enhances air quality and promotes environmental sustainability, addressing critical challenges in urban pollution management.",
      detailedDescription: "Agile Air is an innovative flight tracking and booking platform that provides users with real-time flight information, interactive maps, and seamless booking capabilities. The application integrates with multiple airline APIs to offer comprehensive flight data, including departures, arrivals, delays, and gate information. Users can search for flights, compare prices, and complete bookings directly through the platform. The interactive map feature allows users to visualize flight paths and track flights in real-time. The project demonstrates expertise in API integration, real-time data handling, and creating intuitive user interfaces for complex information.",
      image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "Data-Visualization"]
    },
    {
      id: "project5",
      title: "Water Monitoring System",
      description: "An IoT-based solution for real-time monitoring of water quality parameters in various environments.",
      detailedDescription: "The Water Monitoring System is an advanced IoT solution designed to continuously track and analyze water quality parameters in various settings, from residential water supplies to natural water bodies. The system employs multiple sensors to measure pH levels, turbidity, temperature, dissolved oxygen, and contaminant concentrations. Data is transmitted in real-time to a cloud platform where it is processed, analyzed, and presented through an intuitive dashboard. Users receive alerts when parameters deviate from safe ranges, allowing for prompt intervention. The project showcases skills in IoT development, sensor calibration, data analysis, and creating practical environmental monitoring solutions.",
      image: "https://images.unsplash.com/photo-1581093448798-5b9a68b4f698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      technologies: ["HTML", "CSS", "JavaScript","Arduino", "IoT", "Data-Visualization"]
    }
  ];
  
  // Sample Achievements Data
  const achievements = [
    {
      id: "achievement1",
      title: "Vice Head of Event Team in Coding Club",
      description: "Led a team of organizers to successfully plan and execute multiple coding workshops, hackathons, and tech talks that increased club participation by 40%."
    },
    {
      id: "achievement2",
      title: "3rd Prize in Hackathon",
      description: "Competed against 250+ teams and secured 3rd place by developing an innovative system that converts CO₂ into O₂ while purifying the air, tackling sustainable urban pollution management challenges within a 48-hour hackathon."
    }
  ];

  function createProjectCards() {
      projectsContainer.innerHTML = '';
      projects.forEach((project, index) => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card animate-slide-up';
          projectCard.style.animationDelay = `${index * 100}ms`;

          projectCard.innerHTML = `
              <div class="project-image-container">
                  <img src="${project.image}" alt="${project.title}" class="project-image">
                  <div class="project-title-overlay">
                      <h3 class="project-title">${project.title}</h3>
                  </div>
              </div>
              <div class="project-info">
                  <p class="project-description">${project.description}</p>
                  <div class="project-technologies">
                      ${project.technologies.map(tech => `<span class="badge badge-${tech}">${tech}</span>`).join('')}
                  </div>
              </div>
          `;

          projectCard.addEventListener('click', () => showProjectModal(project));
          projectsContainer.appendChild(projectCard);
      });
  }

  function createAchievementCards() {
      achievementsContainer.innerHTML = '';
      achievements.forEach((achievement, index) => {
          const achievementCard = document.createElement('div');
          achievementCard.className = 'achievement-card animate-slide-up';
          achievementCard.style.animationDelay = `${index * 100}ms`;

          achievementCard.innerHTML = `
              <div class="achievement-info">
                  <h3 class="achievement-title">${achievement.title}</h3>
                  <p class="achievement-description">${achievement.description}</p>
              </div>
          `;

          achievementsContainer.appendChild(achievementCard);
      });
  }

  function showProjectModal(project) {
      modalTitle.textContent = project.title;
      modalImage.src = project.image;
      modalImage.alt = project.title;
     

      modalTechnologies.innerHTML = project.technologies.map(tech => `<span class="badge badge-${tech}">${tech}</span>`).join('');

      projectModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
      projectModal.classList.add('hidden');
      document.body.style.overflow = '';
  }

  closeModal.addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeProjectModal();
  });

  createProjectCards();
  createAchievementCards(); // Now calling the function to display achievements
});
