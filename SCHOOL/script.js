

// Hero Slider

// const slides = document.querySelectorAll(".slide");

// let currentSlide = 0;

// function changeSlide() {

//     slides[currentSlide].classList.remove("active");

//     currentSlide = (currentSlide + 1) % slides.length;

//     slides[currentSlide].classList.add("active");
// }

// setInterval(changeSlide, 4000);

// const counters = document.querySelectorAll(".counter");

// const startCounter = () => {

//     counters.forEach(counter => {

//         const target = +counter.getAttribute("data-target");

//         let count = 0;

//         const increment = target / 100;

//         const updateCounter = () => {

//             count += increment;

//             if (count < target) {

//                 counter.innerText = Math.floor(count);

//                 requestAnimationFrame(updateCounter);

//             } else {

//                 counter.innerText = target.toLocaleString();
//             }
//         };

//         updateCounter();
//     });
// };

// const achievementSection =
//     document.querySelector(".achievements");

// const observer = new IntersectionObserver(entries => {

//     if (entries[0].isIntersecting) {

//         startCounter();

//         observer.unobserve(achievementSection);
//     }

// }, { threshold: 0.3 });

// observer.observe(achievementSection);

// const announcementBox = document.querySelector(".announcement-box");

// let scrollAmount = 0;
// let scrollInterval;

// Start scrolling
function startScroll() {
    scrollInterval = setInterval(() => {

        scrollAmount++;

        announcementBox.scrollTop = scrollAmount;

        if (
            scrollAmount >=
            announcementBox.scrollHeight -
            announcementBox.clientHeight
        ) {
            scrollAmount = 0;
        }

    }, 40);
}

// Stop scrolling
function stopScroll() {
    clearInterval(scrollInterval);
}

// Start initially
startScroll();

// Pause on hover
announcementBox.addEventListener("mouseenter", stopScroll);

// Resume when mouse leaves
announcementBox.addEventListener("mouseleave", startScroll);

//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the menu when clicking the hamburger icon
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const icon = menuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.className = 'fas fa-times'; 
    } else {
      icon.className = 'fas fa-bars';
    }
  });
});
