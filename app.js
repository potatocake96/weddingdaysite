// Hardcoded Data
const scheduleData = [
    {
        time: "3:00 PM",
        title: "Guests Arrive",
        location: "Venue",
        notes: "Welcome! Please find your seat and enjoy the atmosphere.",
        category: "arrival"
    },
    {
        time: "3:30 PM",
        title: "Ceremony",
        location: "Ceremony Area",
        notes: "We're so excited to celebrate with you!",
        category: "ceremony"
    },
    {
        time: "4:30 PM",
        title: "Reset Break",
        location: "Various Locations",
        notes: "Take a break! See our recommended places nearby.",
        category: "break"
    },
    {
        time: "5:30 PM",
        title: "Canapés & Drinks",
        location: "Reception Area",
        notes: "Enjoy delicious canapés and refreshments.",
        category: "reception"
    },
    {
        time: "6:15 PM",
        title: "Please Be Seated",
        location: "Dining Area",
        notes: "Dinner service will begin shortly.",
        category: "reception"
    },
    {
        time: "6:30 PM",
        title: "Dinner Service Begins",
        location: "Dining Area",
        notes: "Enjoy your meal!",
        category: "reception"
    }
];

const seatingData = {
    tables: [
        {
            tableNumber: 1,
            guests: [
                { guestName: "AARON CABABAT", notes: "", flags: [] },
                { guestName: "AMAN DASS", notes: "", flags: [] },
                { guestName: "CHARLES CABABAT", notes: "", flags: [] },
                { guestName: "CHARLYN CABABAT", notes: "", flags: [] },
                { guestName: "GINALYN CABABAT", notes: "", flags: [] },
                { guestName: "KAMLESH DASS", notes: "", flags: [] },
                { guestName: "NAOMI DASS", notes: "", flags: [] },
                { guestName: "PHOEBE DASS", notes: "", flags: [] },
                { guestName: "RADHA DASS", notes: "", flags: [] },
                { guestName: "REGGIE DASS", notes: "", flags: [] },
                { guestName: "SIMON DASS", notes: "", flags: [] },
                { guestName: "VIANKA DASS", notes: "", flags: [] }
            ]
        },
        {
            tableNumber: 2,
            guests: [
                { guestName: "ARIEL VIVAR", notes: "", flags: [] },
                { guestName: "BABU REDDY", notes: "", flags: [] },
                { guestName: "BIMAL REDDY", notes: "", flags: [] },
                { guestName: "CYNTHIA LEE", notes: "", flags: [] },
                { guestName: "DAVID REDDY", notes: "", flags: [] },
                { guestName: "DEEPAK REDDY", notes: "", flags: [] },
                { guestName: "DIPA REDDY", notes: "", flags: [] },
                { guestName: "ELSA VIVAR", notes: "", flags: [] },
                { guestName: "JENNIFER ROSE", notes: "", flags: [] },
                { guestName: "JEREMY KONG", notes: "", flags: [] },
                { guestName: "JESSICA PICKERING", notes: "", flags: [] },
                { guestName: "JESSIE MATTAR", notes: "", flags: [] },
                { guestName: "JOCELYN VIVAR", notes: "", flags: [] },
                { guestName: "JOSIE MUSARRA", notes: "", flags: [] },
                { guestName: "LIONEL VIVAR", notes: "", flags: [] },
                { guestName: "LIZELDA VIVAR", notes: "", flags: [] },
                { guestName: "LONG TRAN", notes: "", flags: [] },
                { guestName: "LOUISA TING", notes: "", flags: [] },
                { guestName: "MIRIAM REDDY", notes: "", flags: [] },
                { guestName: "PURNIMA REDDY", notes: "", flags: [] },
                { guestName: "PUSHPA MOSES", notes: "", flags: [] },
                { guestName: "RESTY VIVAR", notes: "", flags: [] },
                { guestName: "SANJU REDDY", notes: "", flags: [] },
                { guestName: "SUREN DASS", notes: "", flags: [] },
                { guestName: "URMILLA REDDY", notes: "", flags: [] },
                { guestName: "UTRA DASS", notes: "", flags: [] },
                { guestName: "VENANCIA KOOTER", notes: "", flags: [] }
            ]
        },
        {
            tableNumber: 3,
            guests: [
                { guestName: "AIDA VIVAR", notes: "", flags: [] },
                { guestName: "ALEX LIBER", notes: "", flags: [] },
                { guestName: "BRAD RILEY", notes: "", flags: [] },
                { guestName: "BRAYDEN PICKERING", notes: "", flags: [] },
                { guestName: "CHRIS TREVENNA", notes: "", flags: [] },
                { guestName: "ELIF DOKTOROGLU", notes: "", flags: [] },
                { guestName: "GABRIEL VIVAR", notes: "", flags: [] },
                { guestName: "GUIA TUNOGBANUA", notes: "", flags: [] },
                { guestName: "HARRY DIXON", notes: "", flags: [] },
                { guestName: "HAYLEY MCGUANE", notes: "", flags: [] },
                { guestName: "JACOB MANGCO", notes: "", flags: [] },
                { guestName: "JASPER MANGCO", notes: "", flags: [] },
                { guestName: "JESS INCOUL", notes: "", flags: [] },
                { guestName: "JI KOELEWYN", notes: "", flags: [] },
                { guestName: "JORDAN LEW", notes: "", flags: [] },
                { guestName: "JUDY VIVAR", notes: "", flags: [] },
                { guestName: "JUN SOTIAR", notes: "", flags: [] },
                { guestName: "JUSTIN VIVAR", notes: "", flags: [] },
                { guestName: "KEVIN KIU", notes: "", flags: [] },
                { guestName: "LACHLAN VIVAR-SOTIAR", notes: "", flags: [] },
                { guestName: "LAURENCE VIVAR", notes: "", flags: [] },
                { guestName: "LUKE NEAL", notes: "", flags: [] },
                { guestName: "MADIE BAKIR", notes: "", flags: [] },
                { guestName: "MIGUEL CRUZ", notes: "", flags: [] },
                { guestName: "PAULA CARMELO", notes: "", flags: [] },
                { guestName: "SHARLOTTE VIVAR-SOTIAR", notes: "", flags: [] },
                { guestName: "VICTOR COLICO", notes: "", flags: [] },
                { guestName: "WESLEY VIVAR-SOTIAR", notes: "", flags: [] },
                { guestName: "XAVIER LESOCK", notes: "", flags: [] }
            ]
        }
    ]
};

const placesData = [
    {
        name: "Goldy's Tavern",
        category: "Drinks",
        description: "A cozy local tavern perfect for a quick drink and relaxation.",
        minutesAway: 5,
        address: "Check maps for exact location",
        lat: -37.8136,
        lng: 144.9631,
        linkAppleMaps: "https://maps.apple.com/?q=Goldy's+Tavern",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Goldy's+Tavern"
    },
    {
        name: "Gelato Messina",
        category: "Food",
        description: "Artisan gelato with creative flavors - perfect for a sweet treat!",
        minutesAway: 8,
        address: "Check maps for exact location",
        lat: -37.8136,
        lng: 144.9631,
        linkAppleMaps: "https://maps.apple.com/?q=Gelato+Messina",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Gelato+Messina"
    },
    {
        name: "Piccolina Gelateria",
        category: "Food",
        description: "Authentic Italian gelato in a charming setting.",
        minutesAway: 7,
        address: "Check maps for exact location",
        lat: -37.8136,
        lng: 144.9631,
        linkAppleMaps: "https://maps.apple.com/?q=Piccolina+Gelateria",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Piccolina+Gelateria"
    },
    {
        name: "CIBI",
        category: "Coffee",
        description: "Japanese-inspired café with excellent coffee and light meals.",
        minutesAway: 10,
        address: "Check maps for exact location",
        lat: -37.8136,
        lng: 144.9631,
        linkAppleMaps: "https://maps.apple.com/?q=CIBI",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=CIBI"
    },
    {
        name: "Yarra Bend Park",
        category: "Walk",
        description: "Beautiful parkland perfect for a peaceful stroll along the river.",
        minutesAway: 12,
        address: "Check maps for exact location",
        lat: -37.8136,
        lng: 144.9631,
        linkAppleMaps: "https://maps.apple.com/?q=Yarra+Bend+Park",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Yarra+Bend+Park"
    }
];

// Global state
let currentFilter = 'all';
let currentPage = 'home';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setupParallax();
    renderSchedule();
    renderSeating();
    renderPlaces();
    updateCurrentEvent();
    setInterval(updateCurrentEvent, 60000);
    
    // Smooth scroll for hero section
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', () => {
            const navSection = document.querySelector('.nav-section');
            if (navSection) {
                navSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Page navigation with smooth transitions
function showPage(pageId) {
    currentPage = pageId;
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');
        
        // Trigger re-render for animations
        requestAnimationFrame(() => {
            if (pageId === 'schedule') {
                renderSchedule();
            } else if (pageId === 'seating') {
                renderSeating();
            } else if (pageId === 'break') {
                renderPlaces(currentFilter);
            }
        });
    }
    
    // Close menu if open
    const menu = document.getElementById('menu-dropdown');
    if (menu) menu.classList.add('hidden');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const menu = document.getElementById('menu-dropdown');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Modern Parallax scrolling effect
function setupParallax() {
    const heroSection = document.querySelector('.hero');
    const heroTitle = document.querySelector('.hero-title');
    const heroImage = document.querySelector('.hero-image');
    
    if (!heroSection) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const scrollProgress = Math.min(scrolled / heroHeight, 1);
        
        // Parallax for hero image
        if (heroImage) {
            const imageY = scrolled * 0.5;
            const scale = 1 + scrollProgress * 0.1;
            heroImage.style.transform = `translateY(${imageY}px) scale(${scale})`;
            heroImage.style.opacity = 1 - scrollProgress * 0.3;
        }
        
        // Parallax for hero title
        if (heroTitle) {
            const titleY = scrolled * 0.3;
            const titleOpacity = Math.max(0.2, 1 - scrollProgress * 0.8);
            heroTitle.style.transform = `translateY(${titleY}px)`;
            heroTitle.style.opacity = titleOpacity;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
    
    // Initial call
    updateParallax();
}

// Schedule rendering
function renderSchedule() {
    const container = document.getElementById('schedule-timeline');
    if (!container) return;
    
    // Clear and reset for animations
    container.innerHTML = '';
    
    scheduleData.forEach((item, index) => {
        const isActive = isEventActive(item);
        const isPast = isEventPast(item);
        
        const card = document.createElement('div');
        card.id = `event-${item.category || index}`;
        card.className = `timeline-card ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`;
        card.innerHTML = `
            <div class="timeline-time">${item.time}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-location">${item.location}</p>
            ${item.notes ? `<p class="timeline-notes">${item.notes}</p>` : ''}
            ${isActive ? '<div style="position: absolute; top: 20px; right: 20px; width: 12px; height: 12px; background: var(--light-blue); border-radius: 50%; animation: pulse 2s infinite;"></div>' : ''}
        `;
        container.appendChild(card);
    });
}

// Check if event is currently active
function isEventActive(item) {
    const now = new Date();
    const eventTime = parseTime(item.time);
    const nextItem = scheduleData[scheduleData.indexOf(item) + 1];
    
    if (!nextItem) return false;
    
    const nextTime = parseTime(nextItem.time);
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    return currentMinutes >= eventTime && currentMinutes < nextTime;
}

// Check if event is past
function isEventPast(item) {
    const now = new Date();
    const eventTime = parseTime(item.time);
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    return currentMinutes > eventTime;
}

// Parse time string to minutes
function parseTime(timeStr) {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    
    if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
    if (period === 'AM' && hours === 12) totalMinutes -= 12 * 60;
    
    return totalMinutes;
}

// Update current event display
function updateCurrentEvent() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    let currentEvent = null;
    for (let i = 0; i < scheduleData.length; i++) {
        const eventTime = parseTime(scheduleData[i].time);
        const nextTime = i < scheduleData.length - 1 ? parseTime(scheduleData[i + 1].time) : Infinity;
        
        if (currentMinutes >= eventTime && currentMinutes < nextTime) {
            currentEvent = scheduleData[i];
            break;
        }
    }
    
    const currentEventEl = document.getElementById('current-event');
    const currentEventText = document.getElementById('current-event-text');
    
    if (currentEvent && currentEventEl && currentEventText) {
        currentEventText.textContent = `${currentEvent.time} - ${currentEvent.title}`;
        currentEventEl.classList.remove('hidden');
    } else if (currentEventEl) {
        currentEventEl.classList.add('hidden');
    }
    
    // Re-render schedule to update active states
    renderSchedule();
}

// Scroll to specific event
function scrollToEvent(category) {
    const eventEl = document.getElementById(`event-${category}`);
    if (eventEl) {
        eventEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        eventEl.classList.add('animate-pulse');
        setTimeout(() => eventEl.classList.remove('animate-pulse'), 2000);
    }
}

// Seating plan rendering
function renderSeating() {
    const container = document.getElementById('tables-grid');
    if (!container) return;
    
    // Clear and reset for animations
    container.innerHTML = '';
    
    seatingData.tables.forEach((table, index) => {
        const card = document.createElement('div');
        card.className = 'table-card';
        card.onclick = () => toggleTable(table.tableNumber);
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 class="table-number">Table ${table.tableNumber}</h3>
                <svg style="width: 24px; height: 24px; color: var(--light-blue); transition: transform 0.3s;" id="table-${table.tableNumber}-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            <div id="table-${table.tableNumber}-guests" class="table-guests">
                ${table.guests.map(guest => `
                    <div class="guest-item">
                        <span>${toProperCase(guest.guestName)}</span>
                        ${guest.flags && guest.flags.includes('highChair') ? 
                            '<span class="category-badge" style="background: #fb923c; margin-left: 12px;">High Chair</span>' : ''}
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

// Toggle table expansion
function toggleTable(tableNumber) {
    const guestsEl = document.getElementById(`table-${tableNumber}-guests`);
    const cardEl = guestsEl.closest('.table-card');
    const iconEl = document.getElementById(`table-${tableNumber}-icon`);
    
    if (cardEl.classList.contains('expanded')) {
        cardEl.classList.remove('expanded');
        iconEl.style.transform = 'rotate(0deg)';
    } else {
        cardEl.classList.add('expanded');
        iconEl.style.transform = 'rotate(180deg)';
    }
}

// Convert name to proper case
function toProperCase(name) {
    return name.toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Search guest
function searchGuest(query) {
    const resultsContainer = document.getElementById('search-results');
    const tablesGrid = document.getElementById('tables-grid');
    
    if (!query.trim()) {
        resultsContainer.classList.add('hidden');
        tablesGrid.style.display = 'grid';
        return;
    }
    
    const searchQuery = query.toLowerCase().trim();
    const results = [];
    
    seatingData.tables.forEach(table => {
        table.guests.forEach(guest => {
            if (guest.guestName.toLowerCase().includes(searchQuery)) {
                results.push({ ...guest, tableNumber: table.tableNumber });
            }
        });
    });
    
    if (results.length > 0) {
        resultsContainer.innerHTML = `
            <div class="search-result-card">
                <h3 style="font-size: 1.3rem; font-weight: 700; color: var(--light-blue); margin-bottom: 20px;">Found ${results.length} result(s)</h3>
                ${results.map(result => `
                    <div style="margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(135, 206, 235, 0.2);">
                        <div style="font-family: 'BrittanySignature', 'Great Vibes', cursive; font-size: 1.4rem; font-weight: normal; color: var(--light-blue-dark); margin-bottom: 6px; letter-spacing: 0.02em;">${toProperCase(result.guestName)}</div>
                        <div style="color: var(--light-blue); font-weight: 500; font-size: 0.95rem;">Table ${result.tableNumber}</div>
                        ${result.flags && result.flags.includes('highChair') ? 
                            '<span class="category-badge" style="background: #fb923c; margin-top: 8px; display: inline-block;">High Chair</span>' : ''}
                    </div>
                `).join('')}
            </div>
        `;
        resultsContainer.classList.remove('hidden');
        tablesGrid.style.display = 'none';
    } else {
        resultsContainer.innerHTML = `
            <div class="search-result-card">
                <p style="color: var(--gray-600);">No guests found matching "${query}"</p>
            </div>
        `;
        resultsContainer.classList.remove('hidden');
        tablesGrid.style.display = 'none';
    }
}

// Places rendering
function renderPlaces(filter = 'all') {
    const container = document.getElementById('places-grid');
    if (!container) return;
    
    const filtered = filter === 'all' 
        ? placesData 
        : placesData.filter(place => place.category === filter);
    
    // Clear and reset for animations
    container.innerHTML = '';
    
    filtered.forEach((place, index) => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const mapsLink = isIOS ? place.linkAppleMaps : place.linkGoogleMaps;
        
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <div class="place-header">
                <h3 class="place-name">${place.name}</h3>
                <span class="category-badge">${place.category}</span>
            </div>
            <p class="place-desc">${place.description}</p>
            <div class="place-info">
                <div class="place-info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>${place.minutesAway} min away</span>
                </div>
                <div class="place-info-item">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>${place.address}</span>
                </div>
            </div>
            <a href="${mapsLink}" target="_blank" class="place-link">
                Open in Maps
            </a>
        `;
        container.appendChild(card);
    });
}

// Filter places
function filterPlaces(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim();
        if ((category === 'all' && btnText === 'All') || btnText === category) {
            btn.classList.add('active');
        }
    });
    
    renderPlaces(category);
}

