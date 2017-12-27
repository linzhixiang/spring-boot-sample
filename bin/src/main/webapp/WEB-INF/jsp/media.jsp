<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML>

<html>
<head>
<link href="SXFimg/homeshadowbox3/shadowbox.css" rel="stylesheet" type="text/css" >
<SCRIPT language=javascript src="SXFimg/js/jquery-1.7.1.min.js" type=text/javascript></SCRIPT>
<script  src="SXFimg/homeshadowbox3/shadowbox.js" type="text/javascript"></script>
<script type="text/javascript" src="SXFimg/js/jquery.switchable[all].min.js"></script>
	<meta charset="UTF-8">
	<title>Media - Game Website Template</title>
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<script>
	$(document).ready(function(){
	Shadowbox.init();
	 window.api = $("#trigger1").switchable("#panel1 > div > a", {
	        triggerType: "click",
        effect: "scroll",
	        steps: 3,
	        visible: 3,
	        circular: true
    }).autoplay({ api: true });
	     
	    $("#next1").click(function(){
	        api.next();
	    });
	    $("#prev1").click(function(){
	        api.prev();
	    });
           
        }); 
</script>
	
</head>
<body>
	<div id="background">
		<div id="header">
			<div>
				<div>
					<a href="index" class="logo"><img src="images/logo.png" alt=""></a>
					<ul>
						<li>
							<a href="index" id="menu1">home</a>
						</li>
						<li class="selected">
							<a href="media" id="menu2">media</a>
						</li>
						<li>
							<a href="games" id="menu3">games</a>
						</li>
						<li>
							<a href="about" id="menu4">about</a>
						</li>
						<li>
							<a href="blog" id="menu5">blog</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div id="body">
			<div>
				<div>
					<div class="media">
						<div>
							
							<div>
								<h3>videos</h3>
								<ul>
									<li>
										<a href="SXFimg/video/1.flv" rel="shadowbox" class="figure"><img src="images/wallpaper1.jpg" alt=""></a>
										<span><a href="#">This is just a place holder</a></span>
									</li>
									<li>
										<a href="#" class="figure"><img src="images/video2.jpg" alt=""></a>
										<span><a href="#">This is just a place holder</a></span>
									</li>
									<li>
										<a href="#" class="figure"><img src="images/video3.jpg" alt=""></a>
										<span><a href="#">This is just a place holder</a></span>
									</li>
									<li>
										<a href="#" class="figure"><img src="images/video4.jpg" alt=""></a>
										<span><a href="#">This is just a place holder</a></span>
									</li>
									<li>
										<a href="#" class="figure"><img src="images/wallpaper4.jpg" alt=""></a>
										<span><a href="#">This is just a place holder</a></span>
									</li>
								</ul>
							</div>
						</div>
						<div class="article">
							<h3>this is just a place holder</h3>
							<ul>
								<li>
									<a href="#" class="figure"><img src="images/media2.jpg" alt=""></a>
									<p>
										This website template has been collect from <a href="http://www.cssmoban.com/" title=""></a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template.
									</p>
								</li>
								<li>
									<a href="#" class="figure"><img src="images/media3.jpg" alt=""></a>
									<p>
										If you're having problems editing this website template, then don't hesitate to ask for help on the Forum.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="footer">
			<div>
				<ul>
					<li id="facebook">
						<a href="#">facebook</a>
					</li>
					<li id="twitter">
						<a href="#">twitter</a>
					</li>
					<li id="googleplus">
						<a href="#">googleplus</a>
					</li>
				</ul>
				<p>
					@ copyright 2016. All rights reserved.&nbsp;<a title="老大哥网络公司" target="_blank">老大哥网络公司</a>
				</p>
			</div>
		</div>
	</div>
</body>
</html>