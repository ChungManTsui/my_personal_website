let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.querySelector('.typewriter-animation');
  typewriter.addEventListener('animationend', (e) => {
    if (e.animationName === 'typewriter') { 
      typewriter.classList.add('finished');
    }
  });
});

/* Animation*/
const sr = ScrollReveal({
  origin:"top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset:true,

})

sr.reveal('.about,.contact' , {orgin: ' right'})
sr.reveal('.services-container, .projects-box', {interval: 1000})


