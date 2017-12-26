function rsize() {
	var k=$(window).height();// 浏览器当前窗口可视区域高度
 // alert(k); 
    $(".bgPattern1").css({"height":(k/2)-250});
    $("#logo").css({"height":(k/2)-250});
   // $(".loginM").css({"height":(k/2)+36}); 
	//$(".loginBox").css({"height":(k/2)-36}); 
//	$(".web_info").css({"height":(k/2)-200});
//  $(".footer").css({"height":(k/2)-250}); 
	
}
$(document).ready(function(){
   rsize();
   window.onresize=rsize;
});

