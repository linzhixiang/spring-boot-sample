
$(function(){
  $('li.mainlevel').click(function(){
  	$(this).find('div').slideDown();//you can give it a speed
  });
  $(this).find('div').trigger("mousemove",function(){
	  $(this).show();
  });
  $('li.mainlevel').mouseleave(function(){
  $(this).find('div').slideUp("fast");
  });
});


$(document).ready(function () {
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	var dialogTop =  (maskHeight/2) - ($('#MyDiv').height()/2);
	var dialogLeft = (maskWidth/2) - ($('#MyDiv').width()/2);

	$('#windows').click(function(){   //click 单击效果
		$('#MyDiv').css({"display":"block"});
		$('.black_overlay').css({height:maskHeight, width:maskWidth}).show();
		$('html').css({"overflow":"scroll",'overflow-y':'hidden','overflow-x':'hidden'});
	});

	$('.closed').click(function(){
		$('#MyDiv').css({"display":"none"});
		$('.black_overlay').hide();
	});
	
	
	$('#windows1').click(function(){   //click 单击效果
		$('#MyDiv1').css({"display":"block"});
		$('.black_overlay1').css({height:maskHeight, width:maskWidth}).show();
		$('html').css({"overflow":"scroll",'overflow-y':'hidden','overflow-x':'hidden'});
	});

	$('.closed').click(function(){
		$('#MyDiv1').css({"display":"none"});
		$('.black_overlay1').hide();
	});


});

