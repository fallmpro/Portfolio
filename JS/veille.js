// veille.js

function sortArticles(event) {
    var selectedValue = event.target.value;
    var articlesContainer = document.querySelector('.veille-logo');
    var articles = Array.from(articlesContainer.children);

    if (selectedValue === 'alpha') {
        articles.sort(function (a, b) {
            var nameA = a.querySelector('p:first-of-type').innerText.toLowerCase();
            var nameB = b.querySelector('p:first-of-type').innerText.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    } else if (selectedValue === 'date') {
        articles.sort(function (a, b) {
            var dateA = new Date(a.querySelector('p:nth-of-type(2)').innerText);
            var dateB = new Date(b.querySelector('p:nth-of-type(2)').innerText);
            return dateB - dateA;
        });
    } else if (selectedValue === 'note') {
        articles.sort(function (a, b) {
            var noteA = parseFloat(a.querySelector('p:nth-of-type(3)').innerText);
            var noteB = parseFloat(b.querySelector('p:nth-of-type(3)').innerText);
            return noteB - noteA;
        });
    }

    // Réorganiser les éléments dans le conteneur
    articles.forEach(function (article) {
        articlesContainer.appendChild(article);
    });
}
