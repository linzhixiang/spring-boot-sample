

function loadShow(){
	if($("#loading").length>0){
		$("#loading").show();
	}else{
		$("body").append('<div id="loading"  style="position:absolute; top:50%; left:50%; margin:0 auto; height:300px; z-index: 888;;"><img src="./img/loading.gif" ></div>');
	}
}

/**
 * ajax调用方法 post
 * 
 * @author 
 * @param url
 * @param callback
 */
function _ajax_post(url, Params, callback) {
	loadShow();
	$.ajax({
		type : "post",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : 'json',
		data : JSON.stringify(Params),
		url : url,
		success : function(data) {
			$("#loading").hide();
			if (callback)
				callback(data);
		},
		error : function(data, textStatus, errorThrown) {
			$("#loading").hide();
		}
	});
}
/**
 * POST 无加载图片
 * @param url
 * @param Params
 * @param callback
 */
function _ajax_post_no(url, Params, callback) {
	$.ajax({
		type : "post",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : 'json',
		data : JSON.stringify(Params),
		url : url,
		success : function(data) {
			if (callback)
				callback(data);
		},
		error : function(data, textStatus, errorThrown) {
		}
	});
}
/**
 * ajax调用方法 同步post
 * 
 * @author 穆明浩
 * @param url
 * @param callback
 */
function _ajax_post_async(url, Params, callback) {
	loadShow();
	$.ajax({
		async : false,
		type : "post",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : 'json',
		data : JSON.stringify(Params),
		url : url,
		success : function(data) {
			$("#loading").hide();
			if (callback)
				callback(data);
		},
		error : function(data, textStatus, errorThrown) {
			$("#loading").hide();
		}
	});
}
/**
 * ajax调用方法 异步get
 * 
 * @author 穆明浩
 * @param url
 * @param callback
 */
function _ajax_get(url, callback) {
	$.ajax({
		type : "get",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : 'json',
		url : url,
		success : function(data) {
			if (callback)
				callback(data);
		},
		error : function(data, textStatus, errorThrown) {
		}
	});
}
/**
 * ajax调用方法 同步get
 * 
 * @author 穆明浩
 * @param url
 * @param callback
 */
function _ajax_get_async(url, callback) {
	$.ajax({
		async : false,
		type : "get",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		dataType : 'json',
		url : url,
		success : function(data) {
			if (callback)
				callback(data);
		},
		error : function(data, textStatus, errorThrown) {
		}
	});
}
