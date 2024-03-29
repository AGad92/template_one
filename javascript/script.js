// Smooth scrolling
const ul = document.querySelector('.nav__links');
ul.addEventListener('click', function(e){
    e.preventDefault();
    const id =e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView( {behavior : 'smooth'})
})