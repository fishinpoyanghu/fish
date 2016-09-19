;(function($) {
	$.fn.extend({
		previewImg: function(file,btn,img) {
			file.click(function(){
       	 	btn[0].click();
	    });
	    function getObjectURL(file) {
	        var url = null;
	        if (window.createObjectURL != undefined) { // basic
	            url = window.createObjectURL(file);
	        } else if (window.URL != undefined) { // mozilla(firefox)
	            url = window.URL.createObjectURL(file);
	        } else if (window.webkitURL != undefined) { // webkit or chrome
	            url = window.webkitURL.createObjectURL(file);
	        }
	        return url;
	    }
	   	
	   	btn.change(function(){
	        var objUrl = getObjectURL(btn[0].files[0]) ;
	        if (objUrl) {
	            var img=$('#portrait');
	            img.width(200)
	            img.attr("src", objUrl);
	            img.attr("class", "fileImg");
	        }
	        if($(".fileImg").length>1){
	        	$('.fileImg').remove()
	        }
	   	})
		}
	});
})(jQuery)