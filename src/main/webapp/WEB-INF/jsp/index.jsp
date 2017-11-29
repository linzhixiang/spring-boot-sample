<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>
<%
String webPath = getServletContext().getRealPath("/WEB-INF/"); 
%>
<head>
	<meta charset="UTF-8">
	<title>The OldBoss Game Website</title>
	<link rel="stylesheet" href="css/style.css" type="text/css">
	<%@ include file="../views/common/taglibs.jsp"%>
<%@ include file="../views/common/resources.jsp"%>
	<script>
	<%-- var webPath="<%=webPath%>"; --%>
	var pageUrl = "${ctx}/notice/queryNotice/";
	var url="${ctx}/notice/getNotice/";
	var params = {};
	var pageNum = 1;
	var pageSize = 20;
	var id;
	id=1;
</script>
</head>
<body>
	<div id="background">
	<h3 class="process_title"><span></span>
          <div class="btn_opera"  style="text-align: right;cursor: pointer;"><a href="login">登陆</a> 
          </div>
          </h3>
		<div id="header">
			<div>
				<div>
					<a href="index" class="logo"><img src="images/logo.png" alt=""></a>
					<ul>
						<li class="selected">
							<a href="index" id="menu1">home</a>
						</li>
						<li>
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
					<div class="featured">
						<img src="images/featured-game.png" alt="">
					</div>
					<div class="section">
						<div>
							<h3>This is just a place holder</h3>
							<div>
								<p>
									This is just a place holder, so you can see what the site would look like. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template <a href="blog" class="more">read more</a>
								</p>
							</div>
						</div>
						<div>
							<h3>games</h3>
							<div>
								<a href="games" class="figure"><img src="images/games.jpg" alt=""></a>
								<span><a href="games">This is just a place holder</a></span>
							</div>
						</div>
						<div>
							<h3>media</h3>
							<div>
								<a href="media" class="figure"><img src="images/media.jpg" alt=""></a>
								<span><a href="media">This is just a place holder</a></span>
							</div>
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