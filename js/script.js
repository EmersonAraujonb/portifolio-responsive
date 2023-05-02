let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

document.getElementById('current_date').innerHTML = new Date()
  .toISOString()
  .substr(0, 4);

ScrollReveal({
//   reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .project-box, .contact form ',
  { origin: 'bottom' }
);
ScrollReveal().reveal(
  '.home-content h1, .about-img , #box-one, #box-two, #box-three, #box-four, .project-more ',
  { origin: 'left' }
);
ScrollReveal().reveal(
    '.home-content p, .about-content, #box-five, #box-six, #box-seven, #box-eight',
    { origin: 'right' }
  );


  const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor FrontEnd!', 'FrontEnd Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let contactForm = document.getElementById('contact-form'),  
    contactMessage = document.getElementById('contact-message');
    
function resets() {
    contactForm.reset();
}

let sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3tvbtk1', 'template_0q6qhuk', '#contact-form', 'BMjX_mPPnRCKu8Ik6')
    .then(() =>  {
        contactMessage.textContent = 'Formulário enviado com sucesso!'
        contactForm.style.color = '#089345'
        setTimeout(() => {
            contactMessage.textContent = '';   
            resets();
        },4000)

    }, () => {
        contactMessage.textContent = 'Falha ao enviar formulário!'
        contactForm.style.color = '#ff0000'
        
    })
}

contactForm.addEventListener('submit', sendEmail)

// function checkInputs(inputs) {
//     var filled = true;
    
//     inputs.forEach(function(input) {
        
//       if(input.value === "") {
//           filled = false;
//       }
    
//     });
    
//     return filled;
    
//   }

// let button = document.querySelector('.contact .btn');

// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     let text = document.querySelector('.contact .formSucess');
//     var inputs = document.querySelectorAll("input");
//     if (checkInputs(inputs)) {
//     text.style.display = 'block';
//     }else {
//     text.style.display = 'none';      
//     console.log(inputs.value)  
//     }
//     })

  
