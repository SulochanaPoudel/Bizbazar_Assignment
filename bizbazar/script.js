const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });
}

function setActiveTab(link) {
    navLinks.forEach(navLink => {
        if (navLink === link) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute('data-target');
        showSection(targetSectionId);
        setActiveTab(this);
    });
});


showSection('home');
