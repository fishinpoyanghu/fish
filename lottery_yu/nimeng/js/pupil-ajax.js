/*
 * ajax 请求处理函数

 * 
 */
//define(function(require,exports){
//	exports.ajaxGetJson=
	function ajaxGetJson(url, callback, data) {
		ajax(url, callback, data, 'GET');
	};

//	exports.ajaxGetHtml=
	function ajaxGetHtml(url, callback, data) {
		ajax(url, callback, data, 'GET');
	};

//	exports.ajaxPostJson= 
	function ajaxPostJson(url, callback, data) {
		ajax(url, callback, data, 'POST');
	};

//	exports.ajaxPostJsonSync=
	function ajaxPostJsonSync(url, callback, data) {
		ajaxSync(url, callback, data, 'POST');
	};

//	exports.ajaxPostHtml=
	function ajaxPostHtml(url, callback, data) {
		ajax(url, callback, data, 'POST');
	};

//	exports.ajaxLoad=
	function ajaxLoad(selector, url, callback, data) {
		ajaxGetHtml(url, function(result, status) {
			$(selector).empty();
			$(selector).html(result);
			if (callback)
				callback(result, status);
		}, data);
	};

	function ajax(url, callback, data, type) {
		$.ajax({
			url : url,
			data : data,
			type : type,
			async: true,
			cache : false,
			success : function(result, status) {
				if (result.needAdminAuthorize || result.needAuthorize) {//需要登录管理台或前台
					location.href=result.redirectUrl;
					return;
				} 
				else if (callback){
					callback(result, status);
				}
			}
		});
	}

	function ajaxSync(url, callback, data, type) {
		$.ajax({
			url : url,
			data : data,
			async: false,
			type : type,
			cache : false,
			success : function(result, status) {
				if (result.needAdminAuthorize || result.needAuthorize) {//需要登录管理台或前台
					location.href=result.redirectUrl;
					return;
				} 
				else if (callback){
					callback(result, status);
				}
			}
		});
	}
//});
