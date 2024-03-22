// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
  
function validateForm(){
  var email = document.forms["SMForm"]["input-email"].value;
  var password = document.forms["SMForm"]["input-password"].value;
	
  if (password == "!") {
	alert("Password can not have ! in it, Change please");
	return false;
  }
  else {
	alert("Please check your Email inbox for verification!");
	return true;
  }
}