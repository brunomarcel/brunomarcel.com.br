var dt = function() {
    
    //função privada
    var _fixHeader = function(){
		$(window).scroll(function(){
			$(window).scrollTop() >= 56 ? $('.site-header').addClass('fixed') : $('.site-header').removeClass('fixed');
		})
	}();

	// return {
 //        //função pública com acesso privilegiado
 //        fixHeader: function(){
 //            return _fixHeader();
 //        }
 //    }
}();