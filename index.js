const portfolioItems = [
    "💻 Skilled in Web Development",
    "🔒 Interested in Cybersecurity",
    "🌱 Continuously Learning"
];

const listElement = document.getElementById('portfolio-list');

// Populate portfolio items
portfolioItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listElement.appendChild(listItem);
});

// Monitor user interactions
document.body.addEventListener('click', (event) => {
    console.log(`User clicked on: ${event.target.tagName}`);
});

// Log performance metrics
window.addEventListener('load', () => {
    const timing = window.performance.timing;
    const loadTime = timing.domContentLoadedEventEnd - timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});
