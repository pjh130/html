$(function(){
	//$(function(){/*...*/});是$(document).ready(function(){/*...*/})的简写形式，是在DOM加载完成后执行的回调函数，并且只会执行一次
	// alert("图片弹窗");
	// 获取弹窗
	var modal = document.getElementById('myModal');

	// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	// 获取 <span> 元素，设置关闭按钮
	var span = document.getElementsByClassName("close")[0];

	// 当点击 (x), 关闭弹窗
	span.onclick = function() { 
	modal.style.display = "none";
	}
});