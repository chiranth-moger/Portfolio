const icon = document.querySelector(".loading i");
const container = document.querySelector(".container");

// Portfolio page URL (Change it to your actual portfolio link)
const portfolioURL = "./main/main.html";  // Example: "portfolio.html" or "https://yourwebsite.com"

// Function to redirect
const redirectToPortfolio = () => {
  window.location.href = portfolioURL;
};

// Click Event - Redirect immediately when clicked
icon.addEventListener("click", redirectToPortfolio);

// Auto Redirect after 6 seconds if not clicked
setTimeout(redirectToPortfolio, 6000);
