// Obsługa modalu z formularzem kontaktowym
const modal = document.getElementById('contactModal');

function openContactForm() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Blokuje scrollowanie strony pod modalem
}

function closeContactForm() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Przywraca scrollowanie strony
}

// Zamykanie modalu po kliknięciu poza nim
window.onclick = function(event) {
    if (event.target === modal) {
        closeContactForm();
    }
}

// Obsługa formularza
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // FormSubmit zajmie się resztą
    // Możesz dodać tutaj dodatkową walidację jeśli potrzebujesz
}); 