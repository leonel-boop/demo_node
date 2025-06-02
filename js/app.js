// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeMap();
    fetchWeatherData();
    loadEvents();
});

// Mobile Menu Toggle
function initializeMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        const isExpanded = navLinks?.classList.contains('active');
        menuBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
}

// Map Initialization (using Leaflet.js)
async function initializeMap() {
    // TODO: Add Leaflet.js script to HTML and implement map functionality
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    // Placeholder for map implementation
    console.log('Map will be implemented with Leaflet.js');
}

// Weather Data
async function fetchWeatherData() {
    const weatherWidget = document.querySelector('.weather-widget');
    if (!weatherWidget) return;

    // TODO: Implement weather API integration
    // Placeholder for weather data
    weatherWidget.innerHTML = `
        <div class="weather-loading">
            <p>Loading weather data...</p>
        </div>
    `;
}

// Events Loading
function loadEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    if (!eventsGrid) return;

    // Sample events data (to be replaced with API data)
    const events = [
        {
            title: 'Weekend Beach Cleanup',
            date: '2025-06-15',
            location: 'Sunny Beach',
            participants: 24
        },
        {
            title: 'Ocean Day Special',
            date: '2025-06-08',
            location: 'Harbor Point',
            participants: 45
        }
    ];

    // Render events
    eventsGrid.innerHTML = events.map(event => `
        <div class="event-card">
            <h3>${event.title}</h3>
            <p><i class="far fa-calendar"></i> ${formatDate(event.date)}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
            <p><i class="fas fa-users"></i> ${event.participants} participants</p>
            <button class="join-event-btn" onclick="joinEvent('${event.title}')">
                Join Event
            </button>
        </div>
    `).join('');
}

// Utility Functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function joinEvent(eventTitle) {
    // TODO: Implement event joining functionality
    alert(`Thanks for joining ${eventTitle}! We'll send you the details soon.`);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
