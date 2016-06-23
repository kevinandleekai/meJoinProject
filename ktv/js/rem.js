(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/*
用了这个JS就不用才CSS内写N多个@media screenXXX了

在html内最外层元素给max-width:640px,min-width:320px
元素宽高都以rem为单位就会自动缩放
字体大小一般0.2rem-0.34rem
引入img标签时候该img必须float否则其与父元素有20px左右的margin-bottom
参考来源: 猛戳此处
/**
* Created by Administrator on 2016/6/2.
*/
/*(function (doc, win) {
var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    //orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
    //resize事件是屏幕缩放时候触发的事件
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth>=640){
            docEl.style.fontSize = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);*/
    /*DOMContentLoaded是firefox下特有的Event, 当所有DOM解析完以后会触发这个事件。
    DOMContentLoaded事件本身不会等待CSS文件、图片、iframe加载完成。
    它的触发时机是：加载完页面，解析完所有标签（不包括执行CSS和JS），
    并如规范中所说的设置interactive和执行每个静态的script标签中的JS，然后触发。
    而JS的执行，需要等待位于它前面的CSS加载（如果是外联的话）、执行完成，
    因为JS可能会依赖位于它前面的CSS计算出来的样式。*/
// })(document, window);