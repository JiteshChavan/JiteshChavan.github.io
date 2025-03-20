// Dynamically populate skills section
const skillsContainer = document.querySelector('.skills-container');
const imagesPath = './images/';
const skillImages = ['PyTorch.png', 'Python.png', 'TensorFlow.png', 'C-C++.png', 'Matlab.png', 'OpenCV.png', 'HuggingFace.png', 'GitHub.png'
    , 'Java.png', 'LatTeX.png', 'Unity.png', 'Photoshop.png', 'Arduino.png'
]; // Add more image names as needed

skillImages.forEach(image => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');

    const img = document.createElement('img');
    img.src = imagesPath + image;
    img.alt = image.split('.')[0]; // Use the file name as alt text

    const p = document.createElement('p');
    p.textContent = image.split('.')[0]; // Use the file name as the skill name

    skillItem.appendChild(img);
    skillItem.appendChild(p);
    skillsContainer.appendChild(skillItem);
});

// Make the navbar sticky on scroll
const navbar = document.getElementById('navbar');
const scrollThreshold = 100; // Adjust this value as needed

function handleScroll() {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);