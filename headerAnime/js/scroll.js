$(function(){
	headerHeight = $('#mainnav').height();



	$('#digitalSignageBtn').click(function(){
		$('html,body').animate({
			scrollTop:-headerHeight + $('#digitalSignage').offset().top
		},'slow')
	});

	$('#medicalConsultantBtn').click(function(){
		$('html,body').animate({
			scrollTop:-headerHeight + $('#medicalConsultant').offset().top
		},'slow')
	});


});