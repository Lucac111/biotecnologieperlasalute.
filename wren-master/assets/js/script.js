'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});

const express = require('express');
const app = express();

// Servire file statici
app.use('/immagini', express.static('sito/immagini'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// Riferimenti agli elementi
const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

// Aggiungi evento click al bottone dell'hamburger
menuBtn.addEventListener('click', () => {
    // Toggle overlay
    overlay.classList.toggle('overlay-show');
    // Toggle stato dell'hamburger
    menuBtn.classList.toggle('open');
    document.body.classList.toggle('stp-scrolling');
    menu.classList.toggle('show-menu');
});

// Opzionale: chiusura overlay cliccando su di esso
overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-show');
    menuBtn.classList.remove('open');
});

document.addEventListener("DOMContentLoaded", function () {
    // Controlla se l'utente ha già fatto una scelta
    if (!localStorage.getItem('cookiesPreference')) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutti gli elementi del menu con la classe 'menu-item'
  const menuItems = document.querySelectorAll('.menu-item');
  
  // Aggiungi l'evento 'mouseover' per cambiare il colore al passaggio del mouse
  menuItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
          item.style.color = 'black';  // Cambia il colore al passaggio del mouse
      });

      // Ripristina il colore originale quando il mouse esce dall'elemento
      item.addEventListener('mouseout', () => {
          item.style.color = ''; // Rimuove il colore personalizzato, tornando al colore di default
      });
  });
});

