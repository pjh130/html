// JavaScript 入口函数:
// JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行
window.onload = function () {
	// 执行代码
}

// jQuery 入口函数(必须<script src="jquery.min.js"></script>)
// jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行
//完全写法
$(document).ready(function(){
	// 开始写 jQuery 代码...
});
//jQuery 简写
$(function(){
	// 开始写 jQuery 代码...
});