// Get the portfolio type from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const portfolioType = urlParams.get('type');

// Set the page title based on portfolio type
const portfolioTitle = document.getElementById('portfolio-type');
if (portfolioType) {
    portfolioTitle.textContent = `${portfolioType.charAt(0).toUpperCase() + portfolioType.slice(1)} Portfolio`;
}

// Sample image data - replace with your actual images
const portfolioImages = {
    portraits: [
        'Images/image1.jpeg',
        'Images/image2.jpeg',
        'Images/image3.jpeg',
        // Add more portrait images
    ],
    weddings: [
        'Images/image4.jpeg',
        'Images/image5.jpeg',
        'Images/image1.jpeg',
        // Add more wedding images
    ],
    products: [
        'Images/image2.jpeg',
        'Images/image3.jpeg',
        'Images/image4.jpeg',
        // Add more product images
    ]
};

// Function to load images based on portfolio type
function loadPortfolioImages() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    // Clear existing content
    portfolioGrid.innerHTML = '';
    
    // Get images for the selected portfolio type or all if no type specified
    const imagesToShow = portfolioType ? 
        portfolioImages[portfolioType] : 
        [...portfolioImages.portraits, ...portfolioImages.weddings, ...portfolioImages.products];
    
    // Create image elements
    imagesToShow.forEach(imageSrc => {
        const imgElement = document.createElement('div');
        imgElement.className = 'portfolio_page_item';
        imgElement.innerHTML = `<img src="${imageSrc}" alt="${portfolioType || 'portfolio'} image">`;
        portfolioGrid.appendChild(imgElement);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioImages();
    
    // Menu toggle functionality (same as main.js)
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
});

