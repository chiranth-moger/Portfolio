

// Function to create a project card element
function createProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  
  // Create project image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'project-image-container';
  
  // Create and add project image
  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.title;
  image.className = 'project-image';
  imageContainer.appendChild(image);
  
  // Create title overlay
  const titleOverlay = document.createElement('div');
  titleOverlay.className = 'project-title-overlay';
  
  // Create and add project title
  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = project.title;
  titleOverlay.appendChild(title);
  
  imageContainer.appendChild(titleOverlay);
  projectCard.appendChild(imageContainer);
  
  // Create project info container
  const infoContainer = document.createElement('div');
  infoContainer.className = 'project-info';
  
  // Create and add project description
  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;
  infoContainer.appendChild(description);
  
  // Create technologies container
  const technologiesContainer = document.createElement('div');
  technologiesContainer.className = 'project-technologies';
  
  // Add technology badges
  project.technologies.forEach(tech => {
    const badge = document.createElement('span');
    badge.className = `badge badge-outline badge-${tech.split(' ')[0]}`;
    badge.textContent = tech;
    technologiesContainer.appendChild(badge);
  });
  
  infoContainer.appendChild(technologiesContainer);
  projectCard.appendChild(infoContainer);
  
  return projectCard;
}

// Function to populate projects
function populateProjects() {
  const projectsContainer = document.getElementById('projects-container');
  
  // Clear container first
  projectsContainer.innerHTML = '';
  
  // Add project cards
  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
});
