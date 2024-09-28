document.addEventListener('DOMContentLoaded', () => {
    function filterItems(filter) {
        const items = document.querySelectorAll('li');
        items.forEach(item => {
            if (filter === 'all') {
                item.style.display = 'flex'; // Show all items
            } else {
                const itemClass = item.classList.contains(filter) ? 'flex' : 'none';
                item.style.display = itemClass; // Show or hide based on filter
            }
        });
    }

    // Attach event listeners to radio buttons
    const radios = document.querySelectorAll('input[name="choice"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            filterItems(radio.value);
        });
    });
});

