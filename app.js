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
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Goldy's+Tavern+Collingwood",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Goldy's+Tavern+Collingwood"
    },
    {
        name: "Gelato Messina",
        category: "Food",
        description: "Artisan gelato with creative flavors - perfect for a sweet treat!",
        minutesAway: 8,
        address: "Check maps for exact location",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Gelato+Messina+Collingwood",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Gelato+Messina+Collingwood"
    },
    {
        name: "Piccolina Gelateria",
        category: "Food",
        description: "Authentic Italian gelato in a charming setting.",
        minutesAway: 7,
        address: "Check maps for exact location",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Piccolina+Gelateria+Collingwood",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Piccolina+Gelateria+Collingwood"
    },
    {
        name: "CIBI",
        category: "Coffee",
        description: "Japanese-inspired café with excellent coffee and light meals.",
        minutesAway: 10,
        address: "Check maps for exact location",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=CIBI+Collingwood",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=CIBI+Collingwood"
    },
    {
        name: "Yarra Bend Park",
        category: "Walk",
        description: "Beautiful parkland perfect for a peaceful stroll along the river.",
        minutesAway: 12,
        address: "Check maps for exact location",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Yarra+Bend+Park",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Yarra+Bend+Park"
    },
    {
        name: "Smith Street",
        category: "Walk",
        description: "Vibrant shopping strip with cafes, bars, and boutiques - perfect for a stroll.",
        minutesAway: 3,
        address: "Smith Street, Collingwood",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Smith+Street+Collingwood",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Smith+Street+Collingwood"
    },
    {
        name: "Collingwood Yards",
        category: "Coffee",
        description: "Creative hub with cafes and art spaces - great for coffee and a look around.",
        minutesAway: 4,
        address: "Johnston Street, Collingwood",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Collingwood+Yards",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Collingwood+Yards"
    },
    {
        name: "The Standard Hotel",
        category: "Drinks",
        description: "Popular local pub with great atmosphere - perfect for a quick drink.",
        minutesAway: 5,
        address: "Fitzroy Street, Fitzroy",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=The+Standard+Hotel+Fitzroy",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=The+Standard+Hotel+Fitzroy"
    },
    {
        name: "Edinburgh Gardens",
        category: "Walk",
        description: "Beautiful park with open spaces - perfect for a relaxing walk.",
        minutesAway: 8,
        address: "Fitzroy North",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Edinburgh+Gardens+Fitzroy",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Edinburgh+Gardens+Fitzroy"
    },
    {
        name: "Proud Mary Coffee",
        category: "Coffee",
        description: "Award-winning specialty coffee roaster - excellent coffee and light bites.",
        minutesAway: 6,
        address: "Gertrude Street, Collingwood",
        lat: -37.8000,
        lng: 144.9800,
        linkAppleMaps: "https://maps.apple.com/?q=Proud+Mary+Coffee+Collingwood",
        linkGoogleMaps: "https://www.google.com/maps/search/?api=1&query=Proud+Mary+Coffee+Collingwood"
    }
];

// Global state
let currentFilter = 'all';
let currentPage = 'home';
let observeScrollTypewriter = () => {};

const WELCOME_MESSAGE_MAIN = `We are so grateful for your love, support and presence on our special day.

Your kind words and warm wishes made our wedding unforgettable.

Thank you for being a part of our journey and for sharing in the joy of our celebration.

With love, `;
const WELCOME_MESSAGE_SIGNATURE = 'Simon and Charlyn';

// Initialize app — multi-page, parallax on home
document.addEventListener('DOMContentLoaded', () => {
    renderSchedule();
    renderSeating();
    renderPlaces('all');
    updateCurrentEvent();
    setInterval(updateCurrentEvent, 60000);
    setupParallax();
    setupRoseBurst();
    setupScrollReveal();
    observeScrollTypewriter = setupScrollTypewriter();
    observeScrollTypewriter();
    setupWelcomeTypewriter();

    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
        setTimeout(() => heroInner.classList.add('hero-reveal'), 120);
    }

    const header = document.querySelector('.header');
    const homePage = document.getElementById('home-page');
    function updateHeaderScroll() {
        if (!header) return;
        const onHome = homePage && homePage.classList.contains('active');
        const hero = document.querySelector('.hero');
        const scrolledPastHero = hero && window.scrollY > hero.offsetHeight - 60;
        if (onHome && !scrolledPastHero) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
    }
    if (!homePage?.classList.contains('active')) header?.classList.add('scrolled');
    window.addEventListener('scroll', updateHeaderScroll, { passive: true });
    updateHeaderScroll();
    document.querySelectorAll('.menu-item')[0]?.classList.add('active');
});

function showPage(pageId) {
    if (currentPage === pageId) {
        closeMenu();
        return;
    }
    currentPage = pageId;
    document.querySelectorAll('.page').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    const target = document.getElementById(pageId === 'home' ? 'home-page' : pageId + '-page');
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
    document.querySelectorAll('.menu-item').forEach((el, i) => {
        const pages = ['home', 'schedule', 'seating', 'break', 'cameras'];
        el.classList.toggle('active', pages[i] === pageId);
    });
    document.querySelectorAll('.bottom-nav-item').forEach((el, i) => {
        const pages = ['home', 'schedule', 'seating', 'break', 'cameras'];
        if (pages[i] === pageId) el.setAttribute('aria-current', 'page');
        else el.removeAttribute('aria-current');
    });
    closeMenu();
    window.scrollTo(0, 0);
    if (pageId === 'schedule') renderSchedule();
    else if (pageId === 'seating') renderSeating();
    else if (pageId === 'break') renderPlaces(currentFilter);

    requestAnimationFrame(() => {
        document.querySelectorAll('.page.active .scroll-reveal, .page.active .scroll-reveal-parent').forEach((el) => {
            const r = el.getBoundingClientRect();
            if (r.top < window.innerHeight - 60) el.classList.add('reveal');
        });
        observeScrollTypewriter();
        if (pageId === 'home') {
            const couple = document.querySelector('.parallax-couple');
            if (couple) couple.style.transform = 'translate3d(0, 0, 0) scale(1)';
            window.dispatchEvent(new Event('scroll'));
        }
    });
}

function playRoseBurst(clientX, clientY) {
    const container = document.getElementById('rose-burst-container');
    if (!container) return;
    const roseSrc = 'wedding rose.png';
    const count = 18;
    const sizes = [32, 38, 44, 50, 56];

    for (let i = 0; i < count; i++) {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 160;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance + (Math.random() * 80 - 20);
        const rot = (Math.random() - 0.5) * 720;

        const el = document.createElement('div');
        el.className = 'rose-burst';
        el.style.left = (clientX - size / 2) + 'px';
        el.style.top = (clientY - size / 2) + 'px';
        el.style.width = size + 'px';
        el.style.setProperty('--burst-dx', dx + 'px');
        el.style.setProperty('--burst-dy', dy + 'px');
        el.style.setProperty('--burst-r', rot + 'deg');
        el.style.animationDelay = (Math.random() * 0.15) + 's';
        el.style.animationDuration = (1.1 + Math.random() * 0.4) + 's';

        const img = document.createElement('img');
        img.src = roseSrc;
        img.alt = '';
        el.appendChild(img);
        container.appendChild(el);

        el.addEventListener('animationend', () => el.remove(), { once: true });
    }
}

function setupRoseBurst() {
    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('button')) return;
        playRoseBurst(e.clientX, e.clientY);
    });
}

function toggleMenu() {
    const menu = document.getElementById('menu-dropdown');
    if (menu) menu.classList.toggle('hidden');
}

function closeMenu() {
    const menu = document.getElementById('menu-dropdown');
    if (menu) menu.classList.add('hidden');
}

function setupScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('reveal');
            });
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-parent').forEach((el) => observer.observe(el));
}

// Parallax: hero couple only (selfie is in-flow in welcome section)
function setupParallax() {
    const couple = document.querySelector('.parallax-couple');
    const homePage = document.getElementById('home-page');
    if (!homePage) return;
    let ticking = false;
    function update() {
        if (!homePage.classList.contains('active')) return;
        const y = window.scrollY;
        const hero = document.querySelector('.hero');
        const heroH = hero ? hero.offsetHeight : 0;
        if (couple && y <= heroH) {
            const move = y * 0.5;
            const scale = 1 + (y / heroH) * 0.08;
            couple.style.transform = `translate3d(0, ${move}px, 0) scale(${scale})`;
        }
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });
    update();
}

function openCameraModal(which) {
    const modal = document.getElementById('camera-modal');
    const body = document.getElementById('camera-modal-body');
    const template = document.getElementById(`camera-${which}-template`);

    if (!modal || !body || !template) return;

    body.innerHTML = template.innerHTML;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeCameraModal() {
    const modal = document.getElementById('camera-modal');
    const body = document.getElementById('camera-modal-body');
    if (!modal || !body) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    body.innerHTML = '';
}

// Schedule rendering
function renderSchedule() {
    const container = document.getElementById('schedule-timeline');
    if (!container) return;
    
    // Clear and reset for animations
    container.innerHTML = '';
    
    const parent = container;
    if (parent) parent.classList.remove('reveal');
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
    
    const tablesParent = container.closest('.scroll-reveal-parent');
    if (tablesParent) tablesParent.classList.remove('reveal');
    seatingData.tables.forEach((table, index) => {
        const card = document.createElement('div');
        card.className = 'table-card';
        card.onclick = () => toggleTable(table.tableNumber);
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 class="table-number">Table ${table.tableNumber}</h3>
                <svg class="table-chevron" style="width: 24px; height: 24px; color: var(--light-blue); transition: transform 0.3s ease;" id="table-${table.tableNumber}-icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-chevron-down"/></svg>
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
                <h3 style="font-size: 1.2rem; font-weight: 600; color: var(--blue); margin-bottom: 16px;">Found ${results.length} result(s)</h3>
                ${results.map(result => `
                    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--border);">
                        <div style="font-size: 1.1rem; font-weight: 600; color: var(--text); margin-bottom: 4px;">${toProperCase(result.guestName)}</div>
                        <div style="font-size: 14px; color: var(--blue); font-weight: 500;">Table ${result.tableNumber}</div>
                        ${result.flags && result.flags.includes('highChair') ? 
                            '<span class="category-badge" style="background: #c9732a; margin-top: 8px; display: inline-block;">High Chair</span>' : ''}
                    </div>
                `).join('')}
            </div>
        `;
        resultsContainer.classList.remove('hidden');
        tablesGrid.style.display = 'none';
    } else {
        resultsContainer.innerHTML = `
            <div class="search-result-card">
                <p style="color: var(--text-muted);">No guests found matching "${query}"</p>
            </div>
        `;
        resultsContainer.classList.remove('hidden');
        tablesGrid.style.display = 'none';
    }
}

// Typewriter: reveal text character by character (optional onComplete callback)
function typewriterEffect(el, textOrSpeed, speedMs, delayMs, onComplete) {
    if (!el) return;
    let text, speed, delay;
    if (typeof textOrSpeed === 'string') {
        text = textOrSpeed;
        speed = speedMs ?? 45;
        delay = delayMs ?? 0;
    } else {
        text = el.textContent;
        el.textContent = '';
        speed = textOrSpeed ?? 45;
        delay = speedMs ?? 0;
    }
    el.classList.add('typewriter-cursor');
    let i = 0;
    function type() {
        if (i <= text.length) {
            el.textContent = text.slice(0, i);
            i++;
            el._typewriterTimer = setTimeout(type, speed);
        } else {
            el.classList.remove('typewriter-cursor');
            if (typeof onComplete === 'function') onComplete();
        }
    }
    el._typewriterTimer = setTimeout(() => type(), delay);
}

// Welcome message: typewriter when section scrolls into view; then signature in Brittany font
function setupWelcomeTypewriter() {
    const block = document.getElementById('welcome-message');
    const textEl = document.getElementById('welcome-message-text');
    const signatureEl = document.getElementById('welcome-signature');
    if (!block || !textEl) return;
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                if (block.classList.contains('welcome-typewriter-done')) return;
                block.classList.add('welcome-typewriter-done');
                typewriterEffect(textEl, WELCOME_MESSAGE_MAIN, 12, 0, () => {
                    if (signatureEl) {
                        typewriterEffect(signatureEl, WELCOME_MESSAGE_SIGNATURE, 70, 350, () => {
                            const selfieEl = document.getElementById('welcome-selfie');
                            if (selfieEl) selfieEl.classList.add('selfie-reveal');
                        });
                    }
                });
            });
        },
        { rootMargin: '0px 0px -60px 0px', threshold: 0.2 }
    );
    observer.observe(block);
}

// Scroll-triggered typewriter: run when card scrolls into view
function setupScrollTypewriter() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const card = entry.target;
                if (card.classList.contains('typewriter-done')) return;
                card.classList.add('typewriter-done');

                if (card.classList.contains('place-card')) {
                    const nameEl = card.querySelector('.place-name');
                    const descEl = card.querySelector('.place-desc');
                    const nameText = nameEl ? nameEl.textContent : '';
                    const descText = descEl ? descEl.textContent : '';
                    if (nameEl) {
                        nameEl.textContent = '';
                        typewriterEffect(nameEl, nameText, 45, 0);
                    }
                    if (descEl) {
                        descEl.textContent = '';
                        typewriterEffect(descEl, descText, 18, nameText.length * 45 + 80);
                    }
                    return;
                }
                if (card.classList.contains('timeline-card')) {
                    const titleEl = card.querySelector('.timeline-title');
                    if (titleEl) {
                        const t = titleEl.textContent;
                        titleEl.textContent = '';
                        typewriterEffect(titleEl, t, 35, 0);
                    }
                }
                if (card.classList.contains('table-card')) {
                    const numEl = card.querySelector('.table-number');
                    if (numEl) {
                        const t = numEl.textContent;
                        numEl.textContent = '';
                        typewriterEffect(numEl, t, 40, 0);
                    }
                }
            });
        },
        { rootMargin: '0px 0px -40px 0px', threshold: 0.2 }
    );

    function observeTargets() {
        document.querySelectorAll('.place-card:not(.typewriter-done), .timeline-card:not(.typewriter-done), .table-card:not(.typewriter-done)').forEach((el) => observer.observe(el));
    }
    observeTargets();
    return observeTargets;
}

// Places rendering
function renderPlaces(filter = 'all') {
    const container = document.getElementById('places-grid');
    if (!container) return;
    
    container.querySelectorAll('.place-name, .place-desc').forEach((el) => {
        if (el._typewriterTimer) clearTimeout(el._typewriterTimer);
    });
    
    const filtered = filter === 'all' 
        ? placesData 
        : placesData.filter(place => place.category === filter);
    
    container.classList.remove('reveal');
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
                    <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-clock"/></svg>
                    <span>${place.minutesAway} min away</span>
                </div>
                <div class="place-info-item">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-map-pin"/></svg>
                    <span>${place.address}</span>
                </div>
            </div>
            <a href="${mapsLink}" target="_blank" class="place-link">
                Open in Maps
            </a>
        `;
        container.appendChild(card);
    });
    
    container.classList.add('reveal');
    observeScrollTypewriter();
}

// Filter places
function filterPlaces(category) {
    currentFilter = category;
    const container = document.querySelector('.break-filters');
    if (container) {
        container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            const btnText = btn.textContent.trim();
            if ((category === 'all' && btnText === 'All') || btnText === category) {
                btn.classList.add('active');
            }
        });
    }
    renderPlaces(category);
}

