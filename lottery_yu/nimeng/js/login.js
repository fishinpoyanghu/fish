// JavaScript Document
$(function () {
	 //手机号码验证
	$('#mobile').bind('input propertychange', function() {
	     if (!RegMobile($(this).val())) {  
	    	 $('#regForm #mobile').next('span._error').html('请输入正确的手机号!').show(); 
		}else {
			$('#regForm #mobile').next('span._error').hide();  
		}
	});
	 //密码验证
	$('#password').bind('input propertychange', function() {
		
	     if ($(this).val()=="" || $(this).val().length<6) { //!RegPwd($(this).val())
	    	 $('#regForm #password').next('span._error').html('请输入正确的你密码，密码为6~18位字母数字组合!').show(); 
		}else {
			$('#regForm #password').next('span._error').hide();  
		}
	});
	//登录
	$('#loginBtn').click(function() {
		 if (!RegMobile( $('#regForm #mobile').val())) {  
	    	 $('#regForm #mobile').next('span._error').html('请输入正确的手机号!').show(); 
	    	 return false;
		}else {
			$('#regForm #mobile').next('span._error').hide();  
		} 
		if ($('#regForm #password').val()=="" || $('#regForm #password').val().length<6) {  
	    	 $('#regForm #password').next('span._error').html('请输入正确的你密码，密码为6~18位字母数字组合!').show(); 
	    	 return false;
		}else {
			$('#regForm #password').next('span._error').hide();  
		}
		var mobile= $('#regForm #mobile').val();
		var pwd=$('#regForm #password').val(); 
		//location.href = "./cenetr/center.html";
		//var httpStr= requestUrl + "/expert/login?expertPhoneNum="+mobile+"&expertPwd="+$.md5(pwd)+"&from=expert&callback=?";
		ajaxPostJson(requestUrl + "/expert/login", function(data, status){
            eval("rt=" + data);
        	if (rt.error!="") {
        	//	$('#regForm #login_error').html(data.error).show();
                alert(rt.error);
			}else{
				$('#regForm #login_error').html("").hide();
				$.cookie("expertId",rt.expertId,{path:'/'});
				location.href =  "centerA.html";
			}
        }, {"expertPhoneNum":mobile,"expertPwd":$.md5(pwd),"from":"expert"});
		 
		//"/LemonHeart/consult/getHotConsultListM?userPhoneNum="+userPhoneNum+"&debug="+debug+"&startRow=0"
		/*$.ajax({
        type: "Get",
        url: httpStr,
        dataType: "json",
        success: function (data) {
            if(data.error==""){
               //do sth
            }else{
                console.log("服务器请求失败");
            }

        },
        error: function () {
            console.log("请求服务器失败")
        }
      });
*/
		//window.location.href =  "./cenetr/center.html";
		/*$.ajax({  
			type:'post',
			async:false,  			
			url : requestUrl + "/expert/login?expertPhoneNum="+mobile+"&expertPwd="+$.md5(pwd)+"&from=expert",  
			contentType:"application/json",
			dataType : 'jsonp',  
			jsonp:"jcallback",  
			success  : function(data) {  
				alert("用户名："+ data.error);  
			},  
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				myAlert("请求数据异常，状态码：" + XMLHttpRequest.status);
			}
		});  
	 
		
		// 回调函数，可以获取添加后的访问ID，以便其他操作。
		function callback() { 
			if (req.readyState == 4) { 
				if (req.status == 200) {
					 
				}
				else {
					
				}
			}
			else {
				
			}
		}*/
		/*$.getJSON(requestUrl + "/expert/login?jsoncallback=?",{"username":mobile,"password":pwd,"from":"expert"}, 
		function(json) { 
			alert(json.error); alert(json[0].items[0]._name); 
		});*/　 

		/*ajaxPostJson(requestUrl + "/expert/login", function(data, status){
        	if (data.error!="") {
        		 $('#regForm #login_error').html(data.error).show(); 
			}else{
				$('#regForm #login_error').html("").hide(); 
				window.location =  "center.html";
			}
        }, {"username":mobile,"password":password,"from":"expert"});*/
	});
	
});