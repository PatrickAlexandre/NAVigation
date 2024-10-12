// Script pour afficher/masquer les sections
document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('click', () => {
        const ul = header.nextElementSibling;
        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }
    });
});
