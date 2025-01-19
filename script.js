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

//scorrere la freccia

document.querySelectorAll('.scroll-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const currentSection = arrow.closest('.altezzamassima');
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
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



function acceptAllCookies() {
    localStorage.setItem('cookiesPreference', JSON.stringify({
        strictlyNecessary: true,
        performance: true,
        profiling: true,
        functionality: true,
    }));
    closeCookieBanner();
}

function rejectAllCookies() {
    localStorage.setItem('cookiesPreference', JSON.stringify({
        strictlyNecessary: true, // Sempre attivi
        performance: false,
        profiling: false,
        functionality: false,
    }));
    closeCookieBanner();
}

function closeCookieBanner() {
    document.getElementById('cookieBanner').style.display = 'none';
}

document.getElementById('cookieForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const preferences = {
        strictlyNecessary: true, // Sempre attivi
        performance: document.getElementById('performanceCookies').checked,
        profiling: document.getElementById('profilingCookies').checked,
        functionality: document.getElementById('functionalCookies').checked,
    };
    localStorage.setItem('cookiesPreference', JSON.stringify(preferences));
    closeCookieBanner();
});

// Riferimenti agli elementi
const modalContainer = document.getElementById('modal-container');
const modalCloseButton = document.getElementById('modal-close-button');
const leggiDiPiuButton = document.getElementById('leggi-di-piu-button');

// Apre la finestra modale quando l'utente clicca sul pulsante "Leggi di più"
leggiDiPiuButton.addEventListener('click', function() {
  modalContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';  // Disabilita lo scroll della pagina
});

// Chiude la finestra modale quando l'utente clicca sul bottone di chiusura
modalCloseButton.addEventListener('click', function() {
  modalContainer.style.display = 'none';
  document.body.style.overflow = 'auto';  // Rende di nuovo scorrevole il corpo della pagina
});

// Chiude la finestra modale se l'utente clicca al di fuori della modale
modalContainer.addEventListener('click', function(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';  // Rende di nuovo scorrevole il corpo della pagina
  }
});
