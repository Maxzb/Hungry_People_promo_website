$(function(){
	$('.hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-active');
      $('.mob-menu').toggleClass('menu-active');
      $('.mob-menu__circle').toggleClass('mob-menu__circle--transform');
		$('html, body').toggleClass('scroll');
	});
});     