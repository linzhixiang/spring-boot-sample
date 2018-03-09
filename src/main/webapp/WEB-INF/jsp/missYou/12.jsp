<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="pic/snow.ico" type="image/x-icon" />
<title>也许</title>
<script src="assets/js/jquery-1.8.2.min.js"></script>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/garden.js"></script>
<script type="text/javascript" src="js/functions.js"></script>
<link href="css/default.css" type="text/css" rel="stylesheet"></link>

</head>

<body>

<div id="mainDiv">
	<div id="content">
		<div id="code">
			<span class="comments">/**</span><br />
			<span class="space"/><span class="comments">*2018—02-08,</span><br />
			<span class="space"/><span class="comments">*/</span><br />
			男生：<span class="keyword"></span>大神<br/>
			女生：<span class="keyword"></span>吉吉<br/>
			<span class="comments">//相识于游戏</span><br />
			很久以前，那时候玩英雄联盟偶然认识，男生打野会经常帮忙照顾女生在的上路，交流和游戏体验还算愉快zzz;<br />
			<span class="comments">//没有联系</span><br />
			女生为了前男友，把游戏好友都删了...！= =<br />
			<span class="comments">//再次联系</span><br />
			男生刚搬家完的那个夜晚，女生微信说了声：hi,你是？然后又很奇妙地 断断续续，有了联系....<br />
			<span class="comments">//初次见面</span><br />
			2个月后，女生要来上海玩，男生去火车站接她...这算不算是见网友啊！QAQ ，然后参团来了个上海一日游...明珠塔下来的时候，突然被女生拉着，男生感觉仿佛那一刻世界都停止了.<br />
			<span class="comments">//再次见面</span><br />
			男生去了苏州，那天女生穿的一身旗袍，好漂亮...<br/>
			<br>
		</div>
		<div id="loveHeart">
			<canvas id="garden"></canvas>
			<div id="words">
				<div id="messages">
					吉吉，这是我们从第一次相遇到现在的时光。
					<div id="elapseClock"></div>
				</div>
				<div id="loveu">
					好久不见<br/>
				</div>
			</div>
		</div>
	</div>
	<div id="copyright">
	<audio  src="music/MissYou.m4a"   autoplay="autoplay" loop="true"></audio>


		<a href="#">....</a><br />
		<a href="#">....</a><br />
		
	</div>
</div>

<script type="text/javascript">
$(".music").find("body").css("background-color","##ffffee");
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2017,07,24);
together.setHours(10);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
	var msg = document.createElement("div");
	msg.id = "errorMsg";
	msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
	document.body.appendChild(msg);
	$("#code").css("display", "none")
	$("#copyright").css("position", "absolute");
	$("#copyright").css("bottom", "10px");
	document.execCommand("stop");
} else {
	setTimeout(function () {
		startHeartAnimation();
	}, 5000);

	timeElapse(together);
	setInterval(function () {
		timeElapse(together);
	}, 500);

	adjustCodePosition();
	$("#code").typewriter();
}
</script>
</body>
</html>