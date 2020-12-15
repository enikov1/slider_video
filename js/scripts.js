$(document).ready(function () {

	let item = $('.slider-item'),
		timer;
	
	item.each(function(i,el) {

		var buffer = $(el).find('.slider-video').attr('data-youtube'),
			imageParse = buffer.split(/=/, 2);

		if($(el).find('.slider-item_img img').attr('src') == '') {
			$(el).find('.slider-item_img img').attr('src', 'https://img.youtube.com/vi/'+imageParse[1]+'/maxresdefault.jpg');
		}

		$(el).on({
			
			mouseenter: function() {
				clearTimeout(timer);
				timer = setTimeout(function() {
					$(el).find('.slider-video').youtube_background({
						'pause': true,
						'autoplay': true,
						'play-button': true,
						'mobile':true,
						// 'mute-button': true,
						// 'muted': false,
					});

					// $(el).find('.slider-item_ctrl').fadeOut();
				}, 3000);
				// $(el).find('.slider-item_ctrl').fadeIn();
			},
			mouseleave: function() {
				clearTimeout(timer);
				$(el).find('.youtube-background').remove();
				$(el).find('.video-background-controls').remove();

				if($(el).find('.slider-video').length < 1) {
					$(el).append('<div class="slider-video" data-ytbg-mute-button="true" data-youtube="'+buffer+'"></div>');
				}

				// $(el).find('.slider-item_ctrl').fadeIn();
			}
		});
	});

	$('.slider-wrap').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></ button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></ button>',
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					arrows: false,
					centerMode: true,
        			centerPadding: '40px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
					centerMode: true,
        			centerPadding: '40px',
				}
			},
			{
				breakpoint: 486,
				settings: {
					slidesToShow: 1,
					arrows: false,
					centerMode: true,
        			centerPadding: '40px',
				}
			}
		]
	});

});