// Seleciona o botão de alternância e a área do menu
const toggleButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');

// Adiciona um evento de clique ao botão
toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

    // Alterna o atributo aria-expanded e a classe "show"
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    navbarCollapse.classList.toggle('show');
});
