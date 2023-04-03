const pastryImgs = document.querySelectorAll('.pastry-img');

pastryImgs.forEach(img => {
img.addEventListener('click', () => {
img.parentNode.querySelector('.pastry-info').classList.toggle('active');
});
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatizare de derulare a slide-urilor
let slideInterval = setInterval(function() {
  plusSlides(1);
}, 5000);

// Oprire automatizare de derulare a slide-urilor la hover
let slides = document.getElementsByClassName("mySlides");
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mouseover", function() {
    clearInterval(slideInterval);
    });
    slides[i].addEventListener("mouseout", function() {
    slideInterval = setInterval(function() {
    plusSlides(1);
    }, 5000);
    });
    }
    const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obțineți valorile din formular
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  // Creați un nou fișier Excel
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([
    { Nume: name, Email: email, Mesaj: message }
  ]);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact');

  // Descărcați fișierul Excel
  XLSX.writeFile(workbook, 'contact.xlsx');
});




function validateForm() {
    let name = document.forms["contact"]["name"].value;
    let email = document.forms["contact"]["email"].value;
    let message = document.forms["contact"]["message"].value;
    if (name == "" || email == "" || message == "") {
      alert("Toate câmpurile sunt obligatorii!");
      return false;
    }
  }

  let mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  