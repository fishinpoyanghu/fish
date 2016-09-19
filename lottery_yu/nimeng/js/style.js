// JavaScript Document
$(function(){
	// 右侧高度自适应
	$('.menu').height($('.content.public').height());	
	
	// 上传提示
	$('.register-file-title .icon').hover(function(){
		$('.register-file-icon').fadeIn();	
	},function(){
		$('.register-file-icon').fadeOut();	
	});
	
	//
	var appointmentWidth = 0;
	$('.appointment-head').children().each(function(index, element) {
        appointmentWidth += $(element).outerWidth(true);
    }).parent().width(appointmentWidth);
	$('.appointment-li').width(appointmentWidth);
	
	$('.icon-head .icon').hover(function(){
		$(this).siblings('.prompt').fadeIn();	
	},function(){
		$(this).siblings('.prompt').fadeOut();	
	});
	
	$('.appointment-li .service a').click(function(){
		$('.window.service').fadeIn();
	});
	
	$('.appointment-li .describe a').click(function(){
		$('.window.describe').fadeIn();
	});
	
	$('.window-out').click(function(){
		$('.window').fadeOut();	
	});
	
	$('.out').click(function(){
		$('.window').fadeOut();	
	});
	//
	$(".menu .menu-li").click(function(){
		var i = $(this).index();
		$(".menu .menu-li").removeClass("active"); 
		$(this).addClass("active");
		var url="centerA.html";
		if(i==0){
			url="centerA.html";
		}else if(i==1){
			url="consultA.html";
		}else if(i==2){
			url="appointmentA.html";
		}else if(i==3){
			url="incomeA.html";
		}else if(i==4){ 
			url="withdrawalA.html";
		}
		location.href = url;
		//$("#personInfo_"+i).css("display","block");
		//$(".center-frame").css("display","none");
		}
	);
});
