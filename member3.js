/**
 * ============================================================================
 * EventFlow · Member 3 JavaScript Module (member3.js)
 * Assigned Role: Event Details Interaction & Booking Checkout Calculation
 * Target Files: event-detail.html, booking.html
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // If on event details page, initialize wishlist bookmark button
  if (document.querySelector('.detail-layout')) {
    initBookmarkButton();
  }

  // If on ticket booking form, initialize dynamic checkout calculation & submit handler
  if (document.querySelector('.booking-layout form')) {
    initBookingCalculator();
    initBookingSubmit();
  }
});

/**
 * 1. Event Wishlist & Bookmark Interaction
 * Allows attendees to toggle and persist event bookmarking state.
 */
function initBookmarkButton() {
  const ctaContainer = document.querySelector('.detail-content');
  if (!ctaContainer) return;

  const bookmarkBtn = document.createElement('button');
  bookmarkBtn.type = 'button';
  bookmarkBtn.className = 'button';
  bookmarkBtn.style.marginTop = '12px';
  bookmarkBtn.style.display = 'inline-flex';

  const isSaved = localStorage.getItem('eventflow_summit_saved') === 'true';
  bookmarkBtn.textContent = isSaved ? '★ Saved to Wishlist' : '☆ Save to Wishlist';

  bookmarkBtn.addEventListener('click', () => {
    const currentState = localStorage.getItem('eventflow_summit_saved') === 'true';
    const newState = !currentState;
    localStorage.setItem('eventflow_summit_saved', String(newState));
    bookmarkBtn.textContent = newState ? '★ Saved to Wishlist' : '☆ Save to Wishlist';
  });

  ctaContainer.appendChild(bookmarkBtn);
}

/**
 * 2. Live Ticket Pricing & Order Summary Recalculation
 * Dynamically recomputes subtotal and total due when attendee changes tier or quantity.
 */
function initBookingCalculator() {
  const tierSelect = document.getElementById('tier');
  const qtySelect = document.getElementById('qty');
  const summaryRows = document.querySelectorAll('.summary-card .summary-row');
  const totalRow = summaryRows[2] ? summaryRows[2].querySelector('strong') : null;
  const itemRow = summaryRows[0];

  if (!tierSelect || !qtySelect || !totalRow || !itemRow) return;

  const tierPrices = {
    'General Access - Rs. 899': 899,
    'Workshop + Conference - Rs. 1,499': 1499,
    'All-Access VIP - Rs. 2,499': 2499
  };

  function updateOrderSummary() {
    const selectedTierText = tierSelect.value;
    const pricePerTicket = tierPrices[selectedTierText] || 899;
    const qty = parseInt(qtySelect.value, 10) || 1;
    const subtotal = pricePerTicket * qty;
    const platformFee = 50;
    const grandTotal = subtotal + platformFee;

    // Update item line and grand total
    itemRow.querySelector('span').textContent = `${qty}x Pass (${selectedTierText.split(' - ')[0]})`;
    itemRow.querySelector('strong').textContent = `Rs. ${subtotal.toLocaleString('en-IN')}`;
    totalRow.textContent = `Rs. ${grandTotal.toLocaleString('en-IN')}`;
  }

  tierSelect.addEventListener('change', updateOrderSummary);
  qtySelect.addEventListener('change', updateOrderSummary);
  updateOrderSummary();
}

/**
 * 3. Booking Form Submission & Storage Pipeline
 * Packages user input and stores ticket confirmation details in localStorage.
 */
function initBookingSubmit() {
  const form = document.querySelector('.booking-layout form');
  if (!form) return;

  form.addEventListener('submit', () => {
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const tier = document.getElementById('tier').value;
    const qty = document.getElementById('qty').value;

    const payload = {
      name: `${firstName} ${lastName}`.trim() || 'Valued Attendee',
      tier: tier,
      quantity: qty,
      serial: 'EF-' + Math.floor(10000 + Math.random() * 90000),
      timestamp: new Date().toISOString()
    };

    localStorage.setItem('eventflow_booking', JSON.stringify(payload));
  });
}
