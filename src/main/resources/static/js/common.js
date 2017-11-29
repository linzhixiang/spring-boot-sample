//分页方法
function page(result) {
	$("#pageTable input:eq(0)").removeAttr("disabled");
	$("#pageTable input:eq(1)").removeAttr("disabled");
	$("#pageTable input:eq(2)").removeAttr("disabled");
	$("#pageTable input:eq(3)").removeAttr("disabled");
	if (result.body == null) {
		totalPage = 1;
		totalNum = 0;
	} else {
		totalPage = result.body.pageCount;
		totalNum = result.body.totalRecord;
		pageNum = result.body.currPageNo;
	}
	// 显示分页数字1-N
	$("#pageTable td").remove();
	if (totalPage < 6) {
		for ( var i = 0; i < totalPage; i++) {
			var pageNo = totalPage - i;
			var $a = $('<td><a href="javascript:void(0);" id=page' + pageNo + ' class="page_a">' + pageNo + '</a><td>');
			$a.data("pageNo", pageNo);
			$("#pageTable th:eq(1)").after($a);
		}
	} else {
		if ((totalPage - pageNum) < 3) {
			for ( var i = 0; i < 5; i++) {
				var pageNo = totalPage - i;
				var $a = $('<td ><a href="javascript:void(0);" id=page' + pageNo + ' class="page_a">' + pageNo + '</a></td>');
				$a.data("pageNo", pageNo);
				$("#pageTable th:eq(1)").after($a);
			}
		} else if (pageNum < 3) {
			for ( var i = 0; i < 5; i++) {
				var pageNo = 5 - i;
				var $a = $('<td><a href="javascript:void(0);" id=page' + pageNo + ' class="page_a">' + pageNo + '</a></td>');
				$a.data("pageNo", pageNo);
				$("#pageTable th:eq(1)").after($a);
			}
		} else {
			for ( var i = 0; i < 5; i++) {
				var pageNo = pageNum - i + 2;
				var $a = $('<td><a href="javascript:void(0);" id=page' + pageNo + ' class="page_a">' + pageNo + '</a></td>');
				$a.data("pageNo", pageNo);
				$("#pageTable th:eq(1)").after($a);
			}
		}
	}
	if (pageNum == 1) {
		$("#pageTable .page_a").removeClass("current");
		$("#page1").addClass("current");
	}
	$("#page" + pageNum).addClass("current");
	// 点击页码分页查询
	$("#pageTable .page_a").click(function() {
		$("#pageTable .page_a").removeClass("current");
		pageNum = $(this).parent("td").data("pageNo");
		params.newSearch = "1";
		search(pageNum);
		$(this).addClass("current");
	});
	$(".page_record").remove();
	$("#pageTable").after('<span class="page_record">共' + totalPage + '页&nbsp;&nbsp;' + totalNum + '条</span>');
	
	if (pageNum == 1) {
		$("#pageTable input:eq(0)").attr("disabled", "disabled");
		$("#pageTable input:eq(1)").attr("disabled", "disabled");
	}

	if (pageNum == totalPage) {
		$("#pageTable input:eq(2)").attr("disabled", "disabled");
		$("#pageTable input:eq(3)").attr("disabled", "disabled");
	}
}

// 判断是否为NULL显示
function isnull(object) {
	if (object == null || object == "null" || object == "") {
		return "";
	} else {
		return object;
	}
}

// 判断是否固定号码
function isPhone(code) {
	var reCode = /^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/;
	return (reCode.test(code));
}
// 判断是否身份证号
function isIdNumber(code) {
	var reCode = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	return (reCode.test(code));
}
// 判断是否手机号码
function isMobilephone(code) {
	var reCode = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
	return (reCode.test(code));
}
// 判断是否为空
function isEmpty(code) {
	var reCode = /\S/;
	return (reCode.test(code));
}
// 判断是否邮箱
function isEmail(code) {
	var reCode = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;
	return (reCode.test(code));
}
// 特殊符号安全限制
function checkSpecificKey(keyCode) {
	var patrn = /[`~!#$%^&+<>?{},\;[\]]/im;
	var flg = false;
	flg = patrn.test(keyCode);
	if (flg) {
		return false;
	}
	return true;
}
// ��ȡ�ύ��ʱ�Ĳ���
$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [ o[this.name] ];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
function html_encode(str) {
	var s = "";
	if (str.length == 0)
		return "";
	s = str.replace(/&/g, "&gt;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/ /g, "&nbsp;");
	s = s.replace(/\'/g, "&#39;");
	s = s.replace(/\"/g, "&quot;");
	s = s.replace(/\n/g, "<br>");
	return s;
}

function html_decode(str) {
	var s = "";
	if (str.length == 0)
		return "";
	s = str.replace(/&gt;/g, "&");
	s = s.replace(/&lt;/g, "<");
	s = s.replace(/&gt;/g, ">");
	s = s.replace(/&nbsp;/g, " ");
	s = s.replace(/&#39;/g, "\'");
	s = s.replace(/&quot;/g, "\"");
	s = s.replace(/<br>/g, "\n");
	return s;
}
function getCursorPos(obj) {
	return obj.selectionStart;
}
function setCursorPos(obj, pos) {
	if (obj.setSelectionRange) {
		var obj1 = obj.value;
		obj.setSelectionRange(pos, pos);
	} else if (obj.createTextRange) {
		var range = obj.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}
// 只能输入数字
function onlyNum(obj) {
	var pattern = /[^\d]/g;
	var pos = getCursorPos(obj);
	var orgValue = obj.value;
	obj.value = orgValue.replace(pattern, "");
	pos = pos - Math.ceil(orgValue.length - obj.value.length);
	setCursorPos(obj, pos);
}
// 只能输入数字和小数点
function onlyQuantity(obj) {
	var pattern = /[^\d.]/g;
	var pos = getCursorPos(obj);
	var orgValue = obj.value;
	obj.value = orgValue.replace(pattern, "");
	pos = pos - Math.ceil(orgValue.length - obj.value.length);
	setCursorPos(obj, pos);
}
// 只能输入数字和-，用于电话号码
function onlyPhone(obj) {
	var pattern = /[^\d-]/g;
	var pos = getCursorPos(obj);
	var orgValue = obj.value;
	obj.value = orgValue.replace(pattern, "");
	pos = pos - Math.ceil(orgValue.length - obj.value.length);
	setCursorPos(obj, pos);
}
// 只能用户用户名和密码
function onlyUserInfo(obj) {
	var pattern = /[^a-zA-Z0-9@_]/g;
	var pos = getCursorPos(obj);
	var orgValue = obj.value;
	obj.value = orgValue.replace(pattern, "");
	pos = pos - Math.ceil(orgValue.length - obj.value.length);
	setCursorPos(obj, pos);
}
// 限制特殊字符输入
function replaceAndSetCursor(obj) {
	var pattern = /[`~!#$%^&*+<>?:{},\/;[\]]/im;
	var pos = getCursorPos(obj);
	var orgValue = obj.value;
	obj.value = orgValue.replace(pattern, "");
	pos = pos - Math.ceil(orgValue.length - obj.value.length);
	setCursorPos(obj, pos);
}

// 日期限制
function calDateByDay(d) {
	var now = new Date();
	var date = new Date(now.getTime() + 1000 * 60 * 60 * 24 * d);
	var year = date.getFullYear(); // 年
	var month = date.getMonth() + 1; // 月
	var day = date.getDate(); // 日
	var clock = year + "-";
	if (month < 10)
		clock += "0";
	clock += month + "-";
	if (day < 10)
		clock += "0";
	clock += day + " ";
	return (clock);
}

// 日期比较
function compareTime(a, b) {
	var arr = a.split("-");
	var starttime = new Date(arr[0], arr[1], arr[2]);
	var starttimes = starttime.getTime();

	var arrs = b.split("-");
	var lktime = new Date(arrs[0], arrs[1], arrs[2]);
	var lktimes = lktime.getTime();

	if (starttimes > lktimes) {
		return false;
	} else {
		return true;
	}
}

// 正则 : 食品经营许可证
function spjyNumber(number) {
	var num = /^(JY|jy)[0-9A-Za-z]{14}$/;
	return num.test(number);
}

function spltNumber(number) {
	var num = /^(SP|sp)[0-9A-Za-z]{16}$/;
	return num.test(number);
}

// 正则 : 食品生产许可证
function spscNumber(number) {
	var num = /^((QS|qs)[0-9A-Za-z]{12}$|(SC|sc)[0-9A-Za-z]{14}$)/;
	return num.test(number);
}

// 正则 : 工商营业执照
function gszzNumber(number) {
	var num = /^([0-9A-Za-z]{15}$|[0-9A-Za-z]{18}$)/;
	return num.test(number);
}

// 正则 : 餐饮服务许可证
function cyfwNumber(number) {
	var num = /^(西藏|藏|新疆|疆|桂|宁夏|宁|内蒙古|蒙|冀|晋|辽|吉|黑|苏|浙|皖|闽|赣|鲁|豫|鄂|湘|粤|琼|川|蜀|黔|贵|滇|云|陕|秦|甘|陇|青|台|港|澳|京|沪|津|渝)(餐证字)[0-9A-Za-z]{16}$/;
	return num.test(number);
}
// 非空判断
function nullFlag(object) {
	if (object == null || object == "") {
		return true;
	} else {
		return false;
	}
}
	
// 时间是否超过了24小时
function cutTime(data) {
	var a = data.split(" ");
    var b = a[0].split("-");
    var c = a[1].split(":");
    var oldTime = new Date(b[0], b[1]-1, b[2], c[0], c[1], c[2]);

	var nowTime=new Date();
	return (nowTime-oldTime)/(1000*60*60*24);
}


function timeStamp2String(time){
		var timestamp = Date.parse(time);
	    var datetime = new Date();
	    datetime.setTime(timestamp);
	    var year = datetime.getFullYear();
	    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
	    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
	    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
	    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
	    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
	    return year + "-" + month + "-" + date;
}
