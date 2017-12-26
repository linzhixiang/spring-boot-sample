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
<script  type="text/javascript">
var pageUrl="${ctx}/competition/searchCompetition/";
var updateSUrl="${ctx}/apply/updateAssessResultByStatus";
var deleteUrl="${ctx}/apply/deleteAssessResultById";
var params = {};
var pageNum=1;
var totalPage = "";
var totalNum = "";
var pageSize=10;
var conten;
var projectName;//培训资料名称
var oprateButton;//培训资料名称

function search(pageNum){
	pageNum=pageNum;
	params.projectName = projectName;
	_ajax_post(pageUrl + pageNum + "/" + pageSize, params, function(data) {
	   if(data.status==0){
		    pageContentReset(data);
		    page(data);
	   }
	});
}
function pageselectCallback(page_index, jq){
	var pageNo = page_index + 1;
	search(pageNo);
	return false;
}
function pageContentReset(result){
	console.log(result.body.resultList.length);
	$("#tbody1").children().remove();
	if(result!=null&&result.body.resultList.length>0){
		var resultList=result.body.resultList;
		console.log(resultList.lenght);
		for(var i=0;i<resultList.length;i++){
			var num=(pageNum-1)*pageSize+i+1;
			var id=resultList[i].id;
			var projectName=isNullForTable(resultList[i].projectName);
			var releaseDate=isNullForTable(resultList[i].releaseDate);
			var closingDate=isNullForTable(resultList[i].closingDate);
			projectName='<a href=${ctx}/findView/competition.apply-view?id='+id+' target="mainFrame">'+projectName+'<a></td>';
			
			oprateButton='<div class="tableButton" style="width:60px;"><input class="buttonB1" type="button" />';
			oprateButton+='<ul class="tableBtn" style="width:60px;">';	
			oprateButton+='<li><a href=${ctx}/findView/competition.apply-view?id='+id+' target="mainFrame">详情</a></li>';
			oprateButton+='<li><a href=${ctx}/findView/competition.apply-view?id='+id+' target="mainFrame">查看报名</a></li>';
			oprateButton+='</ul></div>';
			
			var $tr = $('<tr><td>'
					+ num
					+'</td><td>'+projectName+'</td>'
					+'<td>'+releaseDate+'</td>'
					+'<td>'+closingDate+'</td>'
					+'<td class="center">'+oprateButton + '</td>'
					+ '</tr>');
			$("#tbody1").append($tr);
			
			$(".buttonB1").bind("mouseenter", function() {
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
			$('.inputBtn4,.inputBtn2,.btnB').click(function () {
				$('.detail_bg').fadeIn(100)
				$('#' + $(this).data('dialog')).slideDown(200)
			})
			$('.detail_title .close, .button1,.button2').click(function () {
				$('.detail_bg').fadeOut(100)
				$(this).closest('.detail').slideUp(200)
				$('#' + $(this).data('dialog')).slideUp(200)
			})
			
			}
		}
	}
	
	$(function() {
		search(pageNum);//查询
		Initialization();//初始化
	});
	
	//页面初始化
	function Initialization(){
		//搜索
		$("#search_button").click(function(){
			projectName=$("#projectName").val().trim();
			search(1);
		});
		
		//展现记录切换
		$("#search_selected").change(function(){
			var sizeStr=$(this).val().trim();
			pageSize=sizeStr.substring(0,sizeStr.length-1);
			projectName=$("#projectName").val().trim();
			search(pageNum);
		});
		pageButton();
	}
	
	//分页button
	function pageButton(){
		//读取页面时执行分页查询
		$("#pageTable input:eq(1)").click(function(event) {
			if (pageNum == 1) {
				params.newSearch = "1";
				search(pageNum);
			} else {
				pageNum += -1;
				params.newSearch = "1";
				search(pageNum);
			}
			event.stopPropagation(); 
		});
		//
		$("#pageTable input:eq(2)").click(function(event) {
			if (pageNum < totalPage) {
				pageNum += 1;
				params.newSearch = "1";
				search(pageNum);
			} else if (pageNum == totalPage) {
				params.newSearch = "1";
				search(pageNum);

			}
			event.stopPropagation(); 
		});
		//点击首页查询数据
		$("#pageTable input:eq(0)").click(function(event) {
			pageNum = 1;
			params.newSearch = "1";
			search(pageNum);
			event.stopPropagation(); 
		});
		//点击尾页查询数据
		$("#pageTable input:eq(3)").click(function(event) {
			pageNum = totalPage;
			params.newSearch = "1";
			search(pageNum);
			event.stopPropagation(); 
		});
	}
</script>
</head>

<body>
	<div class="titleTop">
		<h1>网上报名</h1>
		<table>
			<tr>
				<td width="230px"><input class="inputA" type="text" id="projectName" name="projectName"
					placeholder="项目名称" /></td>
				<td width="80px"><input class="inputBtn1" type="button" id="search_button"
					value="查询" /></td>
			</tr>
		</table>
	</div>
	<div class="conMain">
		<div class="tableA" style="min-height: 355px;">
			<table>
				<thead>
				<tr>
					<th width="50">序号</th>
					<th width="600">名称</th>
					<th>发布日期</th>
					<th>报名截止日期</th>
					<th style="text-align: center;">操作</th>
				</tr>
				</thead>
				<tbody id="tbody1"></tbody>
			</table>
		</div>
		<!-- page start -->
          <div class="tablefoot">
			<p>
				每页显示&nbsp;<select class="selectedFoot" id="search_selected">
					<option selected="selected">10条</option>
					<option>20条</option>
					<option>30条</option>
					<option>50条</option>
				</select>
			</p>
			<table id="pageTable">
				<tr> 
					<th><a href="javascript:void(0)"><input type="button" class="btnLittle" value="首页" /></a></th>
					<th><a href="javascript:void(0)"><input type="button" class="btnUp" value="上一页" /></a></th>
					<th><a href="javascript:void(0)"><input type="button" class="btnDown" value="下一页" /></a></th>
					<th><a href="javascript:void(0)"><input type="button" class="btnLittle" value="尾页" /></a></th>
				</tr>
			</table>
			<span class="page_record">共20页&nbsp;&nbsp;390条</span>
		</div>
		<!-- page end -->

	</div>
</body>
</html>
