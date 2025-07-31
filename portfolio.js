const urlParams = new URLSearchParams(window.location.search);
const portfolioType = urlParams.get('type');

const portfolioTitle = document.getElementById('portfolio-type');
if (portfolioType) {
    portfolioTitle.textContent = `${portfolioType.charAt(0).toUpperCase() + portfolioType.slice(1)} Portfolio`;
}

const portfolioImages = {
    portraits: [
        'Images/portrait1.jpg',
        'Images/portrait2.jpg',
        'Images/portrait4.jpg',
        'Images/portrait5.jpg',
    ],
    weddings: [
        'Images/wedding3.jpg',
        'Images/wedding1.jpg',
        'Images/wedding6.jpg',
    ],
    events: [
        'Images/event1.jpg',
        'Images/event2.jpg',
        'Images/event3.jpg',
    ]
};

function loadPortfolioImages() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = '';
    
    const imagesToShow = portfolioType ? portfolioImages[portfolioType] : 
        [...portfolioImages.portraits, ...portfolioImages.weddings, ...portfolioImages.events];
    
    imagesToShow.forEach(imageSrc => {
        const imgElement = document.createElement('div');
        imgElement.className = 'portfolio_page_item';
        imgElement.innerHTML = `
            <img src="${imageSrc}" alt="${portfolioType || 'portfolio'} image">
            <div class="zoom-btn"><i class="ri-zoom-in-line"></i></div>
        `;
        portfolioGrid.appendChild(imgElement);
    });
}

// Lightbox functionality
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img src="" alt="Zoomed Image" class="lightbox-img">';
document.body.appendChild(lightbox);
const lightboxImg = document.querySelector('.lightbox-img');

function setupLightbox() {
    document.querySelectorAll('.portfolio_page_item img').forEach(img => {
        img.addEventListener('click', (e) => {
            lightboxImg.src = e.target.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelectorAll('.zoom-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const imgSrc = e.target.closest('.portfolio_page_item').querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
}

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioImages();
    setupLightbox();
    
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