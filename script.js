// Dynamically populate skills section
const skillsContainer = document.querySelector('.skills-container');
const imagesPath = './images/';
const skillImages = ['PyTorch.png', 'Python.png', 'TensorFlow.png']; // Add more image names as needed

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