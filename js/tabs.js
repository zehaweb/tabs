$(document).ready(function($) {
	$('.tab_content, .tab_content1, .tab_content2').hide();
	$('.tab_content:first, .tab_content1:first, .tab_content2:first ').show();
	$('.tabs li:first, .tabs1 li:first, .tabs2 li:first').addClass('active');
	
	$('.tabs li').click(function(event) {
		$('.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').hide();
		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});
    $('.tabs1 li').click(function(event) {
		$('.tabs1 li').removeClass('active');
		$(this).addClass('active');
		$('.tab_content1').hide();
		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});
    $('.tabs2 li').click(function(event) {
		$('.tabs2 li').removeClass('active');
		$(this).addClass('active');
		$('.tab_content2').hide();
		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});
  
});
