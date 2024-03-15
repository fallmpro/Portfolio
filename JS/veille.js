function sortArticles(event) {
    const sortBy = event.target.value;

    const articlesContainer = document.querySelector('.veille-logo');
    const articles = Array.from(articlesContainer.querySelectorAll('.card'));

    articles.sort((a, b) => {
        let aValue, bValue;

        if (sortBy === 'ordre_alpha') {
            aValue = a.querySelector('.article-titre').textContent.trim().toLowerCase();
            bValue = b.querySelector('.article-titre').textContent.trim().toLowerCase();
        } else if (sortBy === 'note') {
            aValue = parseInt(a.querySelector('.note').getAttribute('data-note'));
            bValue = parseInt(b.querySelector('.note').getAttribute('data-note'));
            // Inverser l'ordre pour trier les meilleures notes d'abord
            return aValue - bValue;
        } else if (sortBy === 'date') {
            aValue = new Date(a.querySelector('.date').getAttribute('data-date'));
            bValue = new Date(b.querySelector('.date').getAttribute('data-date'));
        }

        if (sortBy === 'date') {
            return aValue - bValue; // Tri par date croissante
        } else {
            return aValue.localeCompare(bValue); // Tri alphabétique croissant
        }
    });

    articlesContainer.innerHTML = '';
    articles.forEach(article => {
        articlesContainer.appendChild(article);
    });
}

const selectOrder = document.querySelector('select[name="order"]');
selectOrder.addEventListener('change', sortArticles);
