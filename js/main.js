// Open projects modal
$("#projects").click(function() {
    $('#projectsWrapper').animate({ 
        opacity: 1
    }, 1, function(){
        $(this).css({
            visibility: 'visible',
            opacity: .96
        }).hide().fadeIn(300);
	});
});

// Close button for modal
$(".btnClose").click(function() {
    $('#projectsWrapper').animate({
        opacity: 0
    }, 300, function() {
        $(this).css('visibility', 'hidden');
    });
});


// Get the value of year
var year = new Date().getFullYear();
$('.year').text(year);
