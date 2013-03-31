// JavaScript Document

(function($){
 
    $.fn.extend({
        //pass the options variable to the function
        iReform: function(options){
			var defaults = {'focusColor': '#000', 'Color':'#777'};
			var settings = $.extend(true, defaults, options);
	
			$('.iReform').each(function(){
				$(this).css({'color':settings.color, 'font-style':'italic'}).val($(this).data('ireformDefault'));
			})

			$('.iReform').on('focus', function(){
				if($(this).val() == $(this).data('ireformDefault'))
					$(this).val('');
				$(this).css({'color':settings.focusColor, 'font-style':'normal'});
			});
			
			$('.iReform').on('blur', function(){
				if($(this).val() == ""){
					$(this).val($(this).data('ireformDefault')).css({'color':settings.color, 'font-style':'italic'});
				}
			});
		
		
		}
		
	});
})(jQuery);
		
		
		
		
		