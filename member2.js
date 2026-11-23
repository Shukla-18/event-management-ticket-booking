/**
 * ============================================================================
 * EventFlow · Member 2 JavaScript Module (member2.js)
 * Assigned Role: Catalog Search/Filter & Digital Pass Presentation
 * Target Files: events.html, confirmation.html
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // If on events page, initialize catalog search & filter
  if (document.querySelector('.filters')) {
    initCatalogSearch();
  }

  // If on confirmation page, populate dynamic boarding pass & print action
  if (document.querySelector('.ticket')) {
    initConfirmationPass();
  }
});

/**
 * 1. Live Search & Category Filter for Event Directory
 * Filters 6 event cards by search query and category dropdown in real-time.
 */
function initCatalogSearch() {
  const searchInput = document.querySelector('.search-box input');
  const categorySelect = document.querySelector('.filters select:first-of-type');
  const cards = document.querySelectorAll('.event-grid .event-card');
  const grid = document.querySelector('.event-grid');

  if (!cards.length || !grid) return;

  // Shared filter evaluation
  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCategory = categorySelect ? categorySelect.value.toLowerCase().trim() : 'all categories';
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
      const meta = card.querySelector('.event-meta') ? card.querySelector('.event-meta').textContent.toLowerCase() : '';
      const tag = card.querySelector('.event-tag') ? card.querySelector('.event-tag').textContent.toLowerCase() : '';

      const matchesQuery = !query || title.includes(query) || meta.includes(query) || tag.includes(query);
      const matchesCategory = selectedCategory === 'all categories' || tag.includes(selectedCategory.split(' ')[0]);

      if (matchesQuery && matchesCategory) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Handle empty state gracefully
    let emptyMsg = grid.querySelector('.no-results');
    if (visibleCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('div');
        emptyMsg.className = 'no-results';
        emptyMsg.textContent = 'No events match your current search or category filter.';
        grid.appendChild(emptyMsg);
      }
    } else if (emptyMsg) {
      emptyMsg.remove();
    }
  }

  if (searchInput) searchInput.addEventListener('input', filterCards);
  if (categorySelect) categorySelect.addEventListener('change', filterCards);
}

/**
 * 2. Boarding Pass Generator & Print Action
 * Reads booking payload from localStorage and renders customized ticket pass.
 */
function initConfirmationPass() {
  const rawData = localStorage.getItem('eventflow_booking');
  if (rawData) {
    try {
      const booking = JSON.parse(rawData);
      const holderEl = document.querySelector('.ticket-info .info-item:nth-child(1) strong');
      const serialEl = document.querySelector('.ticket-info .info-item:nth-child(2) strong');

      if (holderEl && booking.name) holderEl.textContent = booking.name;
      if (serialEl && booking.serial) serialEl.textContent = booking.serial;
    } catch (err) {
      console.warn('Could not parse booking data', err);
    }
  }

  // Inject a Print / Save Pass button if not already present
  let actionsContainer = document.querySelector('.ticket-actions');
  if (!actionsContainer) {
    actionsContainer = document.createElement('div');
    actionsContainer.className = 'ticket-actions';
    const printBtn = document.createElement('button');
    printBtn.className = 'button coral';
    printBtn.textContent = '🖨️ Print / Save Ticket Pass';
    printBtn.addEventListener('click', () => window.print());
    actionsContainer.appendChild(printBtn);

    const ticketSection = document.querySelector('.section .container');
    if (ticketSection) ticketSection.appendChild(actionsContainer);
  }
}
