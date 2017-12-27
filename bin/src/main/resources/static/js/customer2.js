function rsize() {
	var k=$(window).height();// 浏览器当前窗口可视区域高度
 // alert(k);
   //bar左侧按钮条高度控制   
    $("#sideBar").css({"height":k-125}); 
	$("#sideBar img").css({"top":(k-125)/2});
  //判断框架主区高度
    $("#wrap").css({"height":k-125});
	$(".leftmenu").css({"height":k-125});
	$("#main").css({"height":k-160});
}
$(document).ready( function (){  
   rsize();
   window.onresize=rsize;
  //左侧标签上下切换
 $(".left_menu li .thirdMenu>.thirdA").click(function() {
	$(".current3").removeClass("current3");
	$(this).addClass("current3");
		//$(".thirdMenu").slideDown(500);
	})
$(".left_menu li>a").click(function() {
	$(".current2").removeClass("current2");
	$(this).parent().addClass("current2");
		//$(".thirdMenu").slideDown(500);
		if($(this).next().css('display')=='none'){
			$(".left_menu a").next().slideUp();
			$(this).next().slideDown(500);
			console.log("down-----")
			
		}else{
			console.log("up-----")
			//控制自身菜单下子菜单隐藏
			$(this).next().slideUp(500);
			
		}
	})
	//左侧标签上下切换
	$(".left_menu dl dt").click(function() {
		if(!$(this).next().is("dt")){
			if($(this).next().css('display')=='none'){
				var pre=$(".current");
				pre.removeClass("current");
				if(pre.next().is("dd")){
					pre.next().slideUp(500);
				}
				
				$(this).addClass('current');
				$(this).next().slideDown(500);
				console.log("down")
			}else{
				console.log("up")
				$(this).parent().find("dt").removeClass('current');
				//控制自身菜单下子菜单隐藏
				$(this).next().slideUp(500);

			
			}
		}
		
	});

//表格隔行奇偶换色
//$(".tab_con table tbody tr:even").addClass("even");
//$(".tab_con table tbody tr:odd").addClass("odd");


$(".tab_con table tbody tr").each(function(i){  
         var className = ["even", "odd"][i % 2];  
         $(this).addClass(className);  
         $(this).hover(function(){  
                 $(this).removeClass(className);  
                 $(this).addClass("highlight");
            },function(){  
				 $(this).removeClass("highlight");  
                 $(this).addClass(className);  
          });  
    });  
//标签选项切换
  $(".tab_tit span").click(function(){
	          $(this).parent().parent().parent().find(".layer").removeClass("default"); 
	          $(this).addClass("default").siblings().removeClass(); 						  
	            var yy = $(this).attr("rel");
	          $(this).parent().parent().parent().find(".layer."+ yy).addClass("default"); 
	});	
/*---------*/
});

//表格操作按钮
$(function() {

	$(".buttonB1").bind("mouseenter", function() {
		$(".tableBtn").hide();//hide()
		$(this).next().fadeIn(1);//show()
	})
	
	$(".buttonB2").bind("mouseenter", function() {
		$(".tableBtn").hide();//hide()
		$(this).next().fadeIn(1);//show()
	})
	
	$(".tableBtn").bind("mouseleave", function() {
		$(this).fadeOut(1);//hide()
	})
	
	$(".tableBtn a").bind("mouseenter",function(){
		$(this).children().css("visibility","visible");
	}).bind("mouseleave",function(){
		$(this).children().css("visibility","hidden");
	})
});


// 弹窗jQ

$().ready(function(){
	$('.inputBtn4,.inputBtn2,.btnB').click(function () {
		$('.detail_bg').fadeIn(100)
		$('#' + $(this).data('dialog')).slideDown(200)
	})
	$('.detail_title .close, .button1,.button2').click(function () {
		$('.detail_bg').fadeOut(100)
		$(this).closest('.detail').slideUp(200)
		$('#' + $(this).data('dialog')).slideUp(200)
	})
	$('.detail_title .close, .button1,.button2').click(function () {
		$('.detail_bg').fadeOut(100)
		$(this).closest('.detailMax').slideUp(200)
		$('#' + $(this).data('dialog')).slideUp(200)
	})
});
