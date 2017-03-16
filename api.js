$('#search-button').on('click',function(){
	$('#search-results').empty();

	var query= $('#search-field').val();
	var display= $('#search-display').val();

	$.ajax({
		url: 'https://pixabay.com/api/',
		method: 'GET',
		data: {
			key: '2409187-ee958c2d8895c6eb14d3ce314',
			q: query,
			per_page: 50,
			image_type: 'photo',
		},
		success: handle,
	});
});

function handle(response){					
	response.hits.forEach(function(item){
		var url=item.previewURL;
		var image=$(document.createElement('img'));
		image.addClass('img-responsive margin image-results');
		image.addClass('margin');
		image.addClass('image-results')
		image.attr('src', url);
		image.appendTo('#search-results');
	});


	$('.image-results').hover(function(){
		$(this).toggleClass('highlight');
	});
};


$('#search-field').on('keyup', function(e){
	if(e.keyCode==13){
		$('#search-button').click();
	}
});

