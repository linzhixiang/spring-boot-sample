<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta name="renderer" content="webkit">
<meta charset="utf-8">
<%@ include file="/WEB-INF/views/common/taglibs.jsp"%>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>上海市电梯行业人力资源信用信息平台</title>
<%@ include file="/WEB-INF/views/common/resources.jsp"%>
<script type="text/javascript">
	var id = "${id}";
	var getUrl = "${ctx}/competition/searchCompetitionDetail/";
	var par = {};
	$(function(){
		Initialization();//初始化数据
	});
	
	function Initialization(){
		_ajax_get(getUrl+id,function(data){
			var dto=data.body;
			if(dto!=null){
				var id= isnull(dto.id);//id
				var projectName= isnull(dto.projectName);//竞赛名称
				var closingDate= isnull(dto.closingDate);//报名截止日期
				var raceStartDate= isnull(dto.raceStartDate);//竞赛日期起
				var raceEndDate= isnull(dto.raceEndDate);//竞赛日期止
				var issued= isnull(dto.issued);//发布单位
				$("#projectName").append(projectName);
				$("#closingDate").append(closingDate);
				$("#raceDate").append(raceStartDate+"至"+raceEndDate);
				$("#issued").append(issued);
			} else {
				alert(data.message);
			}
		});
	}
</script>	
</head>
<body>
	<div class="titleTop">
		<h1 class="fL">
			网上报名<span>详情</span>
		</h1>
		<div class="btnEsc fR">
			<input type="button" class="btn_back" value="返回" sonclick="location='jnjs_1.html'" />
		</div>
	</div>
	<div class="conMain">
		<div class="textTh">
			2016年下半年职业技能劳动竞赛项目考试
			<div class="tabBtn" style="top: 20px;">
				<input class="button1" type="button" value="查看报名" sonclick="location='jnjs_1_ckbm.html'" />
			</div>
		</div>
		<div class="tab_content">

			<div class="tabLine"></div>

			<ul class="tabs_list">
				<li class="current"><a href="#">基本信息</a></li>
				<li><a href="jnjs_1_xq2.html">组委会组成要求</a></li>
				<li><a href="jnjs_1_xq3.html">竞赛方法</a></li>
				<li><a href="jnjs_1_xq4.html">理论部分大纲</a></li>
				<li><a href="jnjs_1_xq5.html">实际操作大纲</a></li>
			</ul>

			<div class="tab_main">
				<table class="tableD" id="divHide2">
					<tr>
						<th>竞赛名称：</th>
						<td colspan="3"><div id="projectName"></div></td>
					</tr>
					<tr>
						<th>报名截止日期：</th>
						<td colspan="3"><div id="closingDate"></div></td>
					</tr>
					<tr>
						<th>竞赛日期：</th>
						<td colspan="3"><div id="raceDate"></div></td>
					</tr>
					<tr>
						<th>发布单位：</th>
						<td colspan="3"><div id="issued"></div></td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</body>
</html>