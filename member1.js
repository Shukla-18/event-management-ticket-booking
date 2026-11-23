/**
 * ============================================================================
 * EventFlow · Member 1 JavaScript Module (member1.js)
 * Assigned Role: Home Page Discovery & Category Filter System
 * Target File: index.html
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroGreeting();
  initCategoryPills();
  initEventCountdown();
});

/**
 * 1. Dynamic Greeting Based on Time of Day
 * Updates the hero eyebrow text to welcome the user personally.
 */
function initHeroGreeting() {
  const eyebrow = document.querySelector('.hero .eyebrow');
  if (!eyebrow) return;

  const hour = new Date().getHours();
  let greeting = 'Good morning';
  if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon';
  } else if (hour >= 17 || hour < 4) {
    greeting = 'Good evening';
  }

  eyebrow.textContent = `${greeting} · The city is yours`;
}

/**
 * 2. Interactive Category Filter for Shortlist Event Cards
 * Filters the 3 featured cards dynamically without reloading the page.
 */
function initCategoryPills() {
  const pills = document.querySelectorAll('.category-strip .category');
  const cards = document.querySelectorAll('.section .event-grid .event-card');
  if (!pills.length || !cards.length) return;

  pills.forEach((pill) => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();

      // Update active pill styling
      pills.forEach((p) => p.classList.remove('selected'));
      pill.classList.add('selected');

      const selectedCategory = pill.textContent.trim().toLowerCase();

      // Show/hide cards based on category match
      cards.forEach((card) => {
        const tag = card.querySelector('.event-tag');
        const tagText = tag ? tag.textContent.trim().toLowerCase() : '';

        if (selectedCategory === 'all events' || tagText.includes(selectedCategory)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 3. Flagship Event Countdown Badge
 * Computes remaining time for the Future Forward Summit.
 */
function initEventCountdown() {
  const heroActions = document.querySelector('.hero-actions');
  if (!heroActions) return;

  const targetDate = new Date('2025-04-18T10:00:00');
  const now = new Date();
  const diffMs = targetDate - now;

  let countdownText = 'Flagship event soon!';
  if (diffMs > 0) {
    const daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    countdownText = `Next Summit in ${daysLeft} days`;
  }

  // Create clean indicator badge
  const badge = document.createElement('span');
  badge.className = 'eyebrow';
  badge.style.display = 'inline-flex';
  badge.style.alignItems = 'center';
  badge.style.marginLeft = '8px';
  badge.style.color = 'var(--yellow)';
  badge.textContent = `★ ${countdownText}`;
  heroActions.appendChild(badge);
}
