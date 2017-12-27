<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="renderer" content="webkit">
<meta charset="utf-8">
<%@ include file="/WEB-INF/views/common/taglibs.jsp"%>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>上海市电梯行业人力资源信用信息平台</title>
<script type="text/javascript">
var userId = "${sessionScope.APP_LOGIN_USERS.clientUserId}";//登录用户ID
var getUrl = "${ctx}/accountsMsg/getAccountsMsgById/";//企业名称
var par = {};

$(function(){
	getCompanyName();
})

//查询企业名称
function getCompanyName(){
	_ajax_get(getUrl+userId,function(data){
		var dto=data.body;
		if(dto!=null){
			var companyName= isnull(dto.companyName);//账号
			$("#companyName").append(companyName);
		}else {
			alert(data.message);
		}
	});
}
</script>
</head>
<body>
	<!-- bgtop start -->
	<div id="bgPattern2"></div>
	<div id="head">
		<div class="logoA">上海市电梯行业人力资源信用信息平台</div>
		<div class="subTitle">生产企业端</div>
		<ul class="inforPerson">
			<c:if test="${sessionScope.APP_LOGIN_USERS!=null}">
			<li><a href="${ctx}/logout"><input class="iconClose" type="button" value="退出" /></a></li>
			<li class="iconPerson"><a href="${ctx}/findView/system.accountsMsg.accountsMsg" target="mainFrame">${sessionScope.APP_LOGIN_USERS.clientUserName}</a></li>
			<li class="Co"><div id="companyName"></div></li>
			</c:if>
		</ul>
	</div>
	<!-- bgtop end -->
</body>
</html>