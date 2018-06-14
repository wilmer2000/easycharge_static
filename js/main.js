$(document).ready(function(){
	var urlMapAnunciate = 'https://www.google.com/maps/d/embed?mid=1Xme3wdFg6Rzj1I4dJpd8YppjYdFNy8Qp';
	var urlMapAlquileres = 'https://www.google.com/maps/d/embed?mid=13XlGv_SixkLzIBchLpTy8BYn4Do_7NPV';
	var shrinkHeader = 100; 
	$(window).scroll(function () {
	    var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('header').addClass('stick');
        }
        else {
            $('header').removeClass('stick');
        }
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	};
	$('#contacto form').submit(function(event) {
		event.preventDefault();
		if (grecaptcha.getResponse() != "") {
	 		var data = {
			    'reason': $("#contacto #motivo").val(),
			    'name': $("#contacto #name").val(),
			    'phone': $("#contacto #phone").val(),
			    'mail': $("#contacto #mail").val(),
			    'comment': $("#contacto #comment").val()
			};
			$('.messgmodal').fadeIn('fast');
			setTimeout(function(){
				$.ajax({
				    type: "POST",
				    url: "mail.php",
				    data: data,
				    success: function(){
						$('.messgmodal').fadeOut('fast');
						$("#contacto .form-control").val('');
						grecaptcha.reset();
				    }
				});
			}, 1500);
		}
	});

	// $('.gallery .flex_item img').on('click touchstart', function(event){
	// 	$('a.fl').featherlight({
	// 		targetAttr: 'href'
	// 	});
    // });

    $('.btn_menu').on('click touchstart', function(event){
        event.preventDefault();
        $('header #menu').slideToggle('fast');
        $('.btn_menu').toggleClass('open');
    });
    $('.tabs-list a').on('click touchstart', function(event){
        event.preventDefault();
		var id = $(this).attr('id');
		$('.mapa_tab #map').attr('src', '');
		$('.tabs-list a.active, .tabs-section .tab.active').removeClass('active');
        $(this).addClass('active');
		$('.tabs-section .tab' + id).addClass('active');
		if (id === '#one') {
			$('.mapa_tab #map').attr('src', urlMapAlquileres);
		}
		if (id === '#three') {
			$('.mapa_tab #map').attr('src', urlMapAnunciate);
		}
    });
});