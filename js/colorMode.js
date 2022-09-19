'use restrict';

$(document).ready(function(){
	if (parseInt($('select').val()) === 1){
		$('#nav1').removeClass().addClass('navbar navbar-light bg-light');
		$('body').css('background-color', 'rgb(235, 235, 235)');
		$('.row').css('background-color', 'rgba(0, 0, 0, 0.1)')
		$('#nav-icon').addClass('fas fa-sun');
	}

	$('select').on('click', function(){
		if (parseInt(this.value) === 1) {
			$('#nav1').removeClass('navbar navbar-dark bg-dark').addClass('navbar navbar-light bg-light');
			$('body').css('background-color', 'rgb(235, 235, 235)');
			$('#nav-icon').removeClass('far fa-moon').addClass('fas fa-sun');
			$('#nav-icon').css('border-radius', '10px');
			$('.row').css('background-color', 'rgba(0, 0, 0, 0.1)')

			// card
			$('.card').each(function(){
				$(this).css('background-color', 'rgba(0, 0, 0, 0.118)');
				$(this).css('border-color', 'rgb(30, 30, 30)');
			});
			$('.card-title').each(function(){
				$(this).css('color', 'rgb(30, 30, 30)');
			});

			$('.card-img-top').each(function(){
				$(this).css('border-style', 'solid');
				$(this).css('border-color', 'rgba(30, 30, 30, 0.3)');
			});
			$('.card .card-body #omodal').each(function(){
				$(this).css('color', 'black');
			});
		}
		else {
			$('#nav1').removeClass('navbar navbar-light bg-light').addClass('navbar navbar-dark bg-dark');
			$('body').css('background-color', 'rgb(35, 35, 35)');
			$('#nav-icon').removeClass('fas fa-sun').addClass('far fa-moon');
			$('#nav-icon').css('background-color', 'rgba(255, 255, 255, .8');
			$('#nav-icon').css('border-radius', '10px');
			$('.row').css('background-color', 'rgba(200, 200, 200, 0.1)');

			// card
			$('.card').each(function(){
				$(this).css('background-color', 'rgba(255, 255, 255, 0.118)');
				$(this).css('border-color', '#f5f5f5');
			});
			$('.card-title').each(function(){
				$(this).css('color', 'rgb(235, 235, 235)');
			});
			$('.card-img-top').each(function(){
				$(this).css('border-style', 'solid');
				$(this).css('border-color', 'rgba(255, 255, 255, 0.3)');
			})
			$('.card .card-body #omodal').each(function(){
				$(this).css('color', 'white');
			});
		}
	});
});