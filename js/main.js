$("#projects").click(function() {
	$('#projectsWrapper').animate({ 
		opacity: 1
	}, 1, function(){
		$(this).css('visibility', 'visible').hide().fadeIn(300);
	});
});