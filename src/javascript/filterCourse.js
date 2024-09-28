document.addEventListener('DOMContentLoaded', () => {
    function filterItems(filter) {
        const items = document.querySelectorAll('li');
        items.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'block'; // Show all items
            } else {
                // Check if the item has the class corresponding to the selected filter
                const itemClass = item.classList.contains(filter) ? 'block' : 'none';
                item.style.display = itemClass; // Show or hide based on filter
            }
        });
    }

    // Attach event listener to the dropdown
    const dropdown = document.getElementById('filter');
    dropdown.addEventListener('change', () => {
        filterItems(dropdown.value); // Get the selected value from the dropdown
    });
});
