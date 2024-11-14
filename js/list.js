// Get the list items and heading
const items = document.getElementsByTagName('li');
const heading = document.querySelector('h2');

// Count total items
const totalItems = items.length;

// Loop through each item
for (let i = 0; i < items.length; i++) {
    // Check if item is in our "cool" items list
    if (items[i].textContent === 'fresh figs' || 
        items[i].textContent === 'kale' || 
        items[i].textContent === 'honey') {
        items[i].className = 'cool';
    }
}

// Update heading with item count
const newHeading = `Buy groceries (${totalItems} items)`;
heading.textContent = newHeading; 