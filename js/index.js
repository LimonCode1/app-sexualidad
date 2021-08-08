$(document).ready(() => {
	// el metodo .each() me permite agregar alguna accion a cada uno de los elementos que sean enlaces en este caso
	// efecto MENU
	$('.menu a').each(function (index, elemento) {
		$(this).css({
			top: '-200px', //para colocar los enlaces arriba
		});
		$(this).animate(
			{
				top: '0',
			},
			2000 + index * 500
		); // el index hace referencia al orden de los elementos en el cual empieza en 0..1...
	});
	// efecto HEADER
	if ($(window).width() > 800) {
		$('header .texts').css({
			opacity: 0,
			marginTop: 0,
		});
		$('header .texts').animate(
			{
				opacity: 1,
				marginTop: '-52px',
			},
			1500
		);
	}
	//SCROLL ELEMENTOS MENU
	var about = $('#about').offset().top; //obtencion de elementos
	var menu = $('#Platillos').offset().top;
	var gallery = $('#gallery').offset().top;
	var location = $('#location').offset().top;

	$('#btn-about').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: about - 1,
			},
			500 // velocidad
		);
	});
	$('#btn-Menu').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: menu - 1,
			},
			500
		);
	});
	$('#btn-Gallery').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: gallery - 1,
			},
			500
		);
	});
	$('#btn-location').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: location - 1,
			},
			500
		);
	});
});