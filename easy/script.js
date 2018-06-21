$(document).ready(function() {
	
	$('.main_btna').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'toggle'
			}, 1000);
		$('.modal').show(1500);
	});

	$('.main_btn').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'toggle'
			}, 1000);
		$('.modal').show(1500);
	});

	$('.col-sm-7 nav ul li:eq(1)').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'toggle'
			}, 1000);
		$('.modal').show(1500);
	});

	$('.close').on('click', function() {
		$('.overlay').animate(
			{
				opacity: 'hide'
			}, 1000);
		$('.modal').hide(1500);
	})

});