/**
 * ============================================================================
 * EventFlow · Member 4 JavaScript Module (member4.js)
 * Assigned Role: Global UI Controls, Contact Form Validation & Toast System
 * Target Files: about.html, style.css, site-wide
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initContactForm();
});

/**
 * 1. Global Floating "Back to Top" Button
 * Creates and attaches a smooth-scrolling button when attendee scrolls down.
 */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 2. Attendee Support Contact Form Handler (about.html)
 * Performs input validation, prevents reload, resets fields, and triggers feedback.
 */
function initContactForm() {
  const contactForm = document.querySelector('.contact-card form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-msg');

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';

    if (!nameVal || !emailVal) {
      showToast('Please enter both your name and email address.', 'error');
      return;
    }

    // Success response
    contactForm.reset();
    showToast(`Thank you, ${nameVal}! Your message has been sent to our support desk.`);
  });
}

/**
 * 3. Site-Wide Toast Notification System
 * Generates an accessible status notification at the top right of the screen.
 */
function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  // Automatically dismiss toast after 3.5 seconds
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
