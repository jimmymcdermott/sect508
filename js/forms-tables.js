// JavaScript Document
// Add Focus to inputs
$(document).ready(function() {
	$('input[type="text"],input[type="password"],select,textarea').focus(function() {
		$(this).addClass("focusField");
	});
	$('input[type="text"],input[type="password"],select,textarea').blur(function() {
		$(this).removeClass("focusField");
	});
});
// Clear non breaking space in textarea
$(function() {
    $("textarea").focus(function(event) {
		  if( $(this).val() == "\xA0" ) {
          // Erase text from inside textarea
        $(this).text("");
          // Disable text erase
        $(this).unbind(event);
		  }
    });
});
// Check to Reveal more content
$(document).ready(function() {
	$('input[name$="haveComments"]').click(function(){
		if( $(this).is(':checked')) {
			$("#addingComments").show("fast");
		} else {
			$("#addingComments").hide("fast");
		}
	});
	$('input[name$="haveMoreComments"]').click(function(){
		if( $(this).is(':checked')) {
			$("#addingMoreComments").show("fast");
		} else {
			$("#addingMoreComments").hide("fast");
		}
	});
});
// Style buttons via jQuery
$(function() {
	$( ".jQueryButton" )
		.button()
		.click(function( event ) {
			event.preventDefault();
	});
	$( "#accordion" ).accordion();
});