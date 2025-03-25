// Obtém o elemento do título principal pelo ID
const tituloPrincipal = document.querySelector('h1');

// Adiciona um ouvinte de evento para o clique no título
tituloPrincipal.addEventListener('click', function() {
  // Altera o texto do título quando clicado
  tituloPrincipal.textContent = 'Título clicado!';

  // Adiciona uma classe para alterar a cor do título
  tituloPrincipal.classList.add('clicado');
});

// Obtém todos os elementos de link da navegação
const linksNavegacao = document.querySelectorAll('nav a');

// Adiciona um ouvinte de evento para cada link da navegação
linksNavegacao.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    // Adiciona uma classe para destacar o link quando o mouse passa por cima
    link.classList.add('destacado');
  });

  link.addEventListener('mouseout', function() {
    // Remove a classe de destaque quando o mouse sai do link
    link.classList.remove('destacado');
  });
});