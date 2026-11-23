# EventFlow 🎟️

A simple, fast multi-page event discovery and booking website built using **HTML5, CSS3, and Vanilla JavaScript**.

Users can explore events, filter by category in real-time, view event details, dynamically calculate ticket pricing, complete reservations with localStorage persistence, and print verified digital boarding passes.

## Features

* Event discovery homepage with time-of-day greeting & category filtering
* Real-time search toolbar and category filtering for the 6-card event directory
* Event details deep-dive showcase with wishlist bookmark persistence
* Dynamic checkout form with real-time ticket price calculations
* Verified digital boarding pass with browser print/save action
* About & attendee contact desk with client-side form validation and toast alerts
* Floating smooth-scroll "Back to Top" navigation button
* Responsive mobile-first CSS Grid and Flexbox layout
* Zero external libraries or frameworks (Pure Vanilla HTML5, CSS3 & ES6 JavaScript)

## Tech Used

* HTML5 (Semantic Markup)
* CSS3 (CSS Grid, Flexbox, Custom Properties, Media Queries)
* Vanilla JavaScript (ES6 DOM APIs, LocalStorage, Print APIs)
* Git & GitHub

## Project Structure

```text
EventFlow/
│
├── index.html                  # Discovery Portal (Member 1)
├── events.html                 # Event Directory & Filter Toolbar (Member 2)
├── event-detail.html           # Deep-Dive Showcase & Map (Member 3)
├── booking.html                # Attendee Checkout Form (Member 3)
├── confirmation.html           # Verified Boarding Pass (Member 2)
├── about.html                  # Platform Ethos & Support Desk (Member 4)
├── style.css                   # Central Design System (Member 4)
│
├── member1.js                  # Home Discovery & Category Filters (Member 1)
├── member2.js                  # Catalog Search & Digital Pass Generator (Member 2)
├── member3.js                  # Ticket Price Calculator & Storage (Member 3)
├── member4.js                  # Global UI Controls, Toast & Form Validation (Member 4)
│
├── member1_presentation.html   # Member 1 Viva & Code Presentation Portal
├── member2_presentation.html   # Member 2 Viva & Code Presentation Portal
├── member3_presentation.html   # Member 3 Viva & Code Presentation Portal
├── member4_presentation.html   # Member 4 Viva & Code Presentation Portal
└── README.md
```

## Website Flow

```text
Home (index.html)
 ↓
Events Catalog (events.html)
 ↓
Event Details (event-detail.html)
 ↓
Booking Checkout (booking.html)
 ↓
Boarding Pass Confirmation (confirmation.html)
```

## Team Roles & JavaScript Division (4 Members)

The project and its JavaScript architecture are divided into 4 equal, distinct contributions:

| Member | Assigned Role | HTML / CSS Files | JavaScript Module | JS Lines | Key Responsibilities |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **Member 1** | Discovery Portal & Category Filters | `index.html` | `member1.js` | 89 Lines | Time-of-day hero greeting, client-side category pill filtering, flagship event countdown badge. |
| **Member 2** | Events Catalog & Digital Pass | `events.html`, `confirmation.html` | `member2.js` | 93 Lines | Live catalog search & multi-attribute filter toolbar, empty state handler, localStorage ticket pass hydration, `window.print()` print ticket action. |
| **Member 3** | Event Details & Dynamic Checkout | `event-detail.html`, `booking.html` | `member3.js` | 96 Lines | Event wishlist bookmark toggle with localStorage persistence, dynamic order summary price recalculator (tier × qty + fee), checkout payload serialization. |
| **Member 4** | Platform Story, Global UI & Styling | `about.html`, `style.css` | `member4.js` | 85 Lines | Central CSS design engine, scroll-aware floating Back-to-Top button, attendee contact form validation, site-wide toast notification system. |

## Individual Member Presentation Portals

Each member has a dedicated, self-contained interactive presentation HTML file containing their complete source code, line-by-line architectural breakdown tables, and word-for-word viva speaking scripts:

1. **Member 1**: Open `member1_presentation.html` (Index page + member1.js)
2. **Member 2**: Open `member2_presentation.html` (Events & Confirmation + member2.js)
3. **Member 3**: Open `member3_presentation.html` (Event Details & Booking + member3.js)
4. **Member 4**: Open `member4_presentation.html` (About & CSS Engine + member4.js)

## How to Run

No installation, build step, or server configuration is required.

Simply open `index.html` in any web browser, or launch using **Live Server** in VS Code.

---

**EventFlow**  
*Discover. Explore. Experience.*
