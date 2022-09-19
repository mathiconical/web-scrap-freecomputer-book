$(document).ready(function(){
	$('.card .card-body').on('click', function(){
		// title
		let title = $(this).children('.card-title').text();
		$('.modal #title').text(title);

		// description
		let desc = $(this).children('.description').text();
		$('.modal #description').text(desc);

		// download links
		$('.modal #links #link-download').each(function(){
			this.remove();
		});

		let aLinks = [];
		let downloads = $(this).children('.dlink');
		for (let i = 0; i < downloads.length; i++){
			let link = "<a class='btn btn-primary' id='link-download' href='" + $(downloads[i]).attr('href') + "' target='_blank'>" + (i + 1) + "</a>";
			aLinks[i] = link;
			console.log()
		}
		for(let i = 0; i < aLinks.length; i++){
			$('.modal #links').append(aLinks[i]);
		}

		//console.log(aLinks);

		console.log($('.modal #links'));
	});

});