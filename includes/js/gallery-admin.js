 jQuery(document).ready(function( $ ) { 
 	function checkPostFormat() {
 		var postTemplate = $('#custom_post_template').find(':selected');
	  if( postTemplate.val() == ("single-preorder.php")) {
	     $('#cgc_gallery_meta_box').css('display', 'block');
	  } else {
	  	$('#cgc_gallery_meta_box').css('display', 'none');
	  }
	}
	checkPostFormat();
  $("#custom_post_template").change(function () {
		checkPostFormat();
	});
	if ($(".cgc-gallery-thumbs").html()){
		$("#cgc-gallery-button").html("Edit Gallery").removeClass('button-primary');
	}	else {
		$("#cgc-gallery-button").html("Add Gallery").addClass('button-primary');
	}	
});    
