/*===== MENU SHOW =====*/
const arraySkills = [
    'Web Developer',
    'Mobile Developer',
    'UI/UX Designer',
    'Flutter Developer',
    'Laravel Developer',
    'React JS Developer'
];

let skillIndex = 0;
const skillsElement = document.getElementById('skills');

function typeWriterEffect(text, i, callback) {
    if (i < text.length) {
        skillsElement.textContent += text.charAt(i);
        setTimeout(() => typeWriterEffect(text, i + 1, callback), 100);
    } else if (callback) {
        setTimeout(callback, 1000); // Pause before starting the next skill
    }
}

function deleteTextEffect(callback) {
    const text = skillsElement.textContent;
    if (text.length > 0) {
        skillsElement.textContent = text.substring(0, text.length - 1);
        setTimeout(() => deleteTextEffect(callback), 50);
    } else if (callback) {
        callback();
    }
}

function changeSkill() {
    deleteTextEffect(() => {
        typeWriterEffect(arraySkills[skillIndex], 0, () => {
            skillIndex = (skillIndex + 1) % arraySkills.length; // Move to next skill
        });
    });
}

// Start the first animation
changeSkill();

// Repeat the animation every 5 seconds
setInterval(changeSkill, 5000);

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
