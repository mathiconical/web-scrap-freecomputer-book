$(document).ready(function(){

	$(".search").on("keyup paste change", function() {
		let value = $(this).val().toLowerCase();
		
		$('.row .card').filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > - 1);
		});

		if($(this).val().length === 0) {
			let i = 0;
			$('.card').each(function(){
				if(i > 29){
					$(this).css('display', 'none');
				}
				i++;
			});
		}

	});
});