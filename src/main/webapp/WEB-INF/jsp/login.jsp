<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html lang="en" class="no-js">

    <head>
        <meta charset="utf-8">
        <title>Fullscreen Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
        <link rel="stylesheet" href="assets/css/reset.css">
        <link rel="stylesheet" href="assets/css/supersized.css">
        <link rel="stylesheet" href="assets/css/style.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="page-container">
    
		<h1>登录</h1>
		<div id="wrapper">
			<div class="zoombie"></div>
		</div>
        <form:form action="${pageContext.request.contextPath }/login" commandName="user" method="post">
		<form:input path="username"  placeholder="用户名"/>
        <form:errors path="username" cssClass="error" />
        <br />
        <form:password path="password"  placeholder="密码"/>
        <form:errors path="password" cssClass="error" />
        <br />
        <form:button name="button">提交</form:button>
    	</form:form>
    	</div>
           <div class="connect">
                <p>Or connect with:</p>
                <p>
                    <a class="weibo" href=""></a>
                    <a class="qq" href=""></a>
                </p>
            </div> 

        <!-- Javascript -->
        <script src="assets/js/jquery-1.8.2.min.js"></script>
        <script src="assets/js/supersized.3.2.7.min.js"></script>
        <script src="assets/js/supersized-init.js"></script>  
        <script src="assets/js/scripts.js"></script>

    </body>

</html>

