// JavaScript Document

$(function () {
	// 文件上传美化
	$('.register-file-but').click(function(){
		$(this).siblings('input[type=file]').click();
	}).siblings('input[type=file]').change(function(){
		$(this).siblings('.register-file-val').text($(this).val());	
	});	
	
	// page
	$('.page a.but').click(function(){
		if ($(this).hasClass('active')) {
			return false;
		}
		$(this).siblings('a.active').removeClass('active');	
		$(this).addClass('active');
		var i = $(this).index();
		$(".page .page-next").attr("value",i);
		$(".page .page-prev").attr("value",i);
		$("#register_1").css('display','none');
		$("#register_2").css('display','none');
		$("#register_3").css('display','none');
		$("#register_"+i).css('display','block');
		if(i==3) {
			$(".page").hide();
			//$(".page .page-next").hide(); 
		}else{
			//$(".page .page-next").show();
		}
		/*if(i==1){
			$(".page .page-prev").hide();
		}else{
			$(".page .page-prev").show();
		}*/
	});
	
	$(".page .page-next").click(function(){ 
		var i = $(this).attr("value");
		var num= parseInt(i)+1;
		$('.page a.but').removeClass('active');	
		$('.page a.but').eq(i).addClass('active');
		$("#register_"+i).css('display','none'); 
		$("#register_"+num).css('display','block');
		$(".page .page-next").attr("value",num);
		$(".page .page-prev").attr("value",i);
		if(i==2) {
			$(".page").hide();
			//$(".page .page-next").hide();
			//$(".page .page-prev").show();
		}else{
			//$(".page .page-next").show(); 
			//$(".page .page-prev").show();
		}
	});
	
	 //获取验证吗
	$("#sendCode").click(function(){  
		var userPhoneNum = $("#userPhoneNum").val(); 
		var expertId = $.cookie("expertId");  
		 ajaxPostJson(requestUrl + "/SendMsgServlet", function(data, status){
			eval("rt=" + data);
			if (rt.error!="") { 
				alert(rt.error);
			}else{
				alert("验证码发送成功！");
			} 
		 },{"from":"expert","userPhoneNum":userPhoneNum,"expertId":expertId,"debug":1});
	   
	});
	//注册
	$("#registerBtn").click(function(){  
		var formData = $("#registerForm").serialize();
		var expertId = $.cookie("expertId");  
		 ajaxPostJson(requestUrl + "/expert/commitRegisterRequest?"+formData, function(data, status){
			eval("rt=" + data);
			if (rt.error!="") { 
				alert(rt.error);
			}else{
				alert("验证码发送成功！");
			} 
		 },{"from":"expert","expertId":expertId,"debug":1});
	   
	});
	
});