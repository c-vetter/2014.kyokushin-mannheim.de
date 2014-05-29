(function(window, $, PhotoSwipe){
	$(document).ready(function(){
		var options;

		options = {
			imageScaleMethod: "fitNoUpscale",
			jQueryMobile: false,
		};

		$(".gallery").each(function (i, e) {
			$(e).find("a").photoSwipe(options);
		});
	});
})(window, window.jQuery, window.Code.PhotoSwipe);
