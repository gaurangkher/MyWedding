$(window).ready(function() {

	$('#magazine').turn({
		display: 'double',
		acceleration: true,
		gradients: !$.isTouch,
		elevation:50,
		when: {
			turned: function(e, page) {
				/*console.log('Current view: ', $(this).turn('view'));*/
				if(page > 1) {
					$('#info').addClass('box');
				}
			}
		}
	});
});


$(window).bind('keydown', function(e){

	if (e.keyCode==37)
		$('#magazine').turn('previous');
	else if (e.keyCode==39)
		$('#magazine').turn('next');
		
});

$(window).bind('load', function(e){
	$("[id=top]").removeClass('box');
	$("[id=magazine]").removeClass('box');
});	
