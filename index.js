const portfolioItems = [
    "💻 Skilled in Web Development",
    "🔒 Interested in Cybersecurity",
    "🌱 Continuously Learning"
];

const listElement = document.getElementById('portfolio-list');

portfolioItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listElement.appendChild(listItem);
});
