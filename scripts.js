// Mostrar/esconder o botão "Voltar ao Topo" conforme o usuário rola a página
window.addEventListener('scroll', function () {
	const backToTopButton = document.querySelector('.back-to-top');
	if (window.scrollY > 200) {
		backToTopButton.style.display = 'block';
	} else {
		backToTopButton.style.display = 'none';
	}
});

// Função para retornar suavemente ao topo ao clicar no botão
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.back-to-top').addEventListener('click', function (e) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
});
