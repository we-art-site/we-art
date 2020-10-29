jQuery(function(S) {

	// Плавная прокрутка НАВЕРХ при нажатии кнопки '.top'

	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	// Сортировщик картинок Mixitup

	var mixer = mixitup('.new-projects-gallery');

	// Добавляем / убираем класс active в меню  галереи

 	$('.new-projects-menu li').click(function(e){
		$('.new-projects-menu li').removeClass('active');
		$(this).addClass('active');
	});

	// показ скрытого текста при нажатии Read More

	$('.order-info-text .read-more span').click(function(){
		$('.order-info-text .hiden-text').slideToggle();
		if ($(this).text() == 'ЧИТАТЬ БОЛЬШЕ' || $(this).text() == 'Читать больше') {
			$(this).html('СВЕРНУТЬ');
		} else {
			$(this).html('ЧИТАТЬ БОЛЬШЕ');
		}
	});

	// Модальные окна MagnificPopup

		$('.popup-link').magnificPopup({ 
			type: 'image',
			gallery: {
				enabled:true }
		});

	$(window).scroll(function()	{
		
		// Плавная прокрутка НАВЕРХ при нажатии кнопки '.top'

		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	

	// Прелоадер

	$('.loader__inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
	$('body').css({'overflow':'auto'});

});