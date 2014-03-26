	$(function() {
	
		// enable Aware.js, and add new flags to any sort of post-like content	
		var delay = 500;
		$('ul#animated_logo li').each(function() {
			(function(el) {
				setTimeout(function() { $(el).css('top','0px'); },delay);
			})(this);							
			delay = delay + 100;
		
		});
		
		$('.tags').tagsInput({
			width: '100%',
			height: 'auto',
			interactive: false
			
		});
		
		setTimeout(function() { 
	
				$('ul#animated_logo li').css('-webkit-transition-duration','0.1s');
				$('ul#animated_logo').on('mouseenter','li',function() {
					$(this).css('top','-20px');
					(function(el) {
						setTimeout(function() { $(el).css('top','0px'); },100);
					})(this)		
	
				});
	
		
		
		},delay); 	
		
	});
