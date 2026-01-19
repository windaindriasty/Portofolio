
//smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
} 

//fade in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
});
}, {threshold: 0.5});

faders.forEach(fader => {
    observer.observe(fader);
});

// ================= SLIDER PROJECT =================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.slider').forEach(slider => {
    const images = slider.querySelectorAll('.slides img');
    let index = 0;

    slider.querySelector('.next').addEventListener('click', () => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    });

    slider.querySelector('.prev').addEventListener('click', () => {
      images[index].classList.remove('active');
      index = (index - 1 + images.length) % images.length;
      images[index].classList.add('active');
    });
  });
});
