/*// 解决初始化文档高度，让文档高度等于窗体高度，并fixed需要定位的区域在最下方
!(function(){
	if ($(document).height() < $(window).height()) {
		$("#tabbar").css({'position':'fixed','bottom':'0px'});
		$(document).height($(window).height() + "px");
	}
})();
// 解决输入框input获取焦点得时，虚拟键盘会把fixed元素顶上去
$(function(){
	$("#search").on("focus", function(){
		$("#tabbar").css("position", "static");
	}).on("blur", function(){
		$("#tabbar").css({"position": "fixed", "bottom": "0"})
	})
})
// 解决屏幕旋转也会出现以上问题
$(document).on('orientationchange',function(){
	if(window.orientation==90 || window.orientation==-90){
		$("#tabbar").css("position","static");
	}else{
		$("#tabbar").css({"position": "fixed", "bottom": "0"});
	}
});*/
/*var myScroll;
function loaded () {
	if (!$("#music-wrap").size()) return; 
	myScroll = new IScroll('#music-wrap', { bounceEasing: 'elastic', bounceTime: 1200 });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);*/

/*$(".music-module").on("touchstart", ".more-btn", function(){
	var $this = $(this),
		href = $this.attr("data-href");
	if (!href.length) return;
	window.location.href = href;
});
// 推荐歌单页面跳转


// 底部导航切换
$("#tabbar").on("click", ".tabbar-item", function(){
	var href = $(this).attr("data-href");
	if (!href) return;
	window.location.href = href;
	return false;
})


$("#banner-area").on("click", ".banner-left", function(){
	var href = $(this).attr("data-href");
	window.location.href = href;
})
$("#music-wrap").on("click", ".music-visible-panel", function(){
	$(this).siblings(".music-hidden-panel").show();
});



// 查询热门歌曲
function queryHotMusic(opts) {
   $.ajax({
        url: opts.url,
        type: opts.type,
        dataType: opt.dataType,
        async: true,
        timeout: opt.timeout,
        success: function(fnSuccess) {
            fnSuccess && (fnSuccess());
        },
        error: function() {
            alert("请求错误...");
        }
    });
}
// 查询推荐歌曲
function queryRectMusic(opts) {
   $.ajax({
        url: opts.url,
        type: opts.type,
        dataType: opts.dataType,
        async: true,
        timeout: opts.timeout,
        success: function(fnSuccess) {
            fnSuccess && (fnSuccess());
        },
        error: function() {
            alert("请求错误...");
        }
    }); 
}*/
$(".back-btn").on("tap", function(){
	window.history.go(-1);
});