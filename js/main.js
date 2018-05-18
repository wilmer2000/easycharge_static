$(document).ready(function(){
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

    $('.btn_menu').on('click touchstart', function(event){
        event.preventDefault();
        $('header #menu').slideToggle('fast');
        $('.btn_menu').toggleClass('open');
    });
    $('.tabs-list a').on('click touchstart', function(event){
        event.preventDefault();
        var id = $(this).attr('id');
        $('.tabs-list a.active, .tabs-section .tab.active').removeClass('active');
        $(this).addClass('active');
        $('.tabs-section .tab' + id).addClass('active');
    });
});