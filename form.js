$(document).ready(function(){
    var inputs = $('input[type=text]');
    
    // Set all the inputs to the title value.
    inputs.each(function(){
        $(this).val($(this).attr('title')).addClass('unfocused');
    });
    
    // When the user focuses on an input
    inputs.focus(function(){
        var input = $(this);
        if(input.val() == input.attr('title')){
            $(this).removeClass('unfocused').val('');
        }
    });
	
    // When the user loses focus on an input    
    inputs.blur(function(){
        var input = $(this);
        if(input.val() == ''){ // User has not placed text
            input.val(input.attr('title')).addClass('unfocused');
        }
    }); 
	
});