// 显示隐藏div
function showThis1() {
  document.getElementById('divHide1').style.display = ''
  document.getElementById('divHide2').style.display = 'none'
  document.getElementById('divHide3').style.display = 'none'
}

function hideThis1() {
  document.getElementById('divHide3').style.display = 'none'
  document.getElementById('divHide2').style.display = 'block'
  document.getElementById('divHide1').style.display = 'block'
}

function showThis2() {
  document.getElementById('div1').style.display = 'none'
  document.getElementById('div2').style.display = 'none'
  document.getElementById('div3').style.display = 'block'
  document.getElementById('div4').style.display = 'none'
}
function hideThis2() {
  document.getElementById('div1').style.display = 'block'
  document.getElementById('div2').style.display = 'block'
  document.getElementById('div3').style.display = 'none'
  document.getElementById('div4').style.display = 'block'
}
function showThis3() {
  document.getElementById('divJ1').style.display = 'none'
  document.getElementById('divJ2').style.display = 'none'
  document.getElementById('divJ3').style.display = 'block'
  document.getElementById('divJ4').style.display = 'none'
}
function hideThis3() {
  document.getElementById('divJ1').style.display = 'block'
  document.getElementById('divJ2').style.display = 'block'
  document.getElementById('divJ3').style.display = 'none'
  document.getElementById('divJ4').style.display = 'block'
}
function showThis4() {
  document.getElementById('divL1').style.display = 'none'
  document.getElementById('divL2').style.display = 'none'
  document.getElementById('divL3').style.display = 'block'
  document.getElementById('divL4').style.display = 'none'
}
function hideThis4() {
  document.getElementById('divL1').style.display = 'block'
  document.getElementById('divL2').style.display = 'block'
  document.getElementById('divL3').style.display = 'none'
  document.getElementById('divL4').style.display = 'block'
}
function showThis5() {
  document.getElementById('divS1').style.display = 'none'
  document.getElementById('divS2').style.display = 'none'
  document.getElementById('divS3').style.display = 'block'
  document.getElementById('divS4').style.display = 'none'
}
function hideThis5() {
  document.getElementById('divS1').style.display = 'block'
  document.getElementById('divS2').style.display = 'block'
  document.getElementById('divS3').style.display = 'none'
  document.getElementById('divS4').style.display = 'block'
}




// 弹窗jQ

$().ready(function(){
	$('.inputBtn4,.inputBtn2,.btnB').click(function () {
		$('.detail_bg').fadeIn(100)
		$('#' + $(this).data('dialog')).slideDown(200)
	})
	$(' .button1,.button2').click(function () {
		$('.detail_bg').fadeOut(100)
		$(this).closest('.detail').slideUp(200)
		$('#' + $(this).data('dialog')).slideUp(200)
	})
	$('.detail_title .close').click(function () {
		$('.detail_bg').fadeOut(100)
		$('.detail').slideUp(200)
	})
});

//鼠标滑动事件 由于列表动态生成需重新绑定事件
function mouseenterBut() {
	$("#tbody .buttonB1").bind("mouseenter", function() {
		$(".tableBtn").hide();//hide()
		$(this).next().fadeIn(1);//show()
	});
	$("#tbody .tableBtn").bind("mouseleave", function() {
		$(this).fadeOut(1);//hide()
	});
	$("#tbody .tableBtn a").bind("mouseenter", function() {
		$(this).children().css("visibility", "visible");
	}).bind("mouseleave", function() {
		$(this).children().css("visibility", "hidden");
	});
	$('#tbody .inputBtn4,#tbody .inputBtn2,#tbody .btnB').click(function () {
		$('.detail_bg').fadeIn(100);
		$('#' + $(this).data('dialog')).slideDown(200);
	});
	$('#tbody .button1,.button2').click(function () {
		$(this).closest('.detail').slideUp(200);
		$('#' + $(this).data('dialog')).slideUp(200);
	});
	$('#tbody .detail_title .close').click(function () {
		$('.detail_bg').fadeOut(100);
		$('.detail').slideUp(200);
	});
}
