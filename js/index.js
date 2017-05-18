window.onload = function() {
	/*
		鼠标滚动时切换导航
	*/ 
	var inputs = document.getElementsByTagName("input");
	function mouseScroll(e) {
		//num的值为-1,1
		var num = 0;
		if (e.wheelDelta) {
			num = e.wheelDelta/120;
		}else if(e.detail) {
			num = e.detail/3;
		}
		if(num){
	   		handle(num,inputs);
		}
	}
	//调用鼠标滚动事件
	if(window.addEventListener) {
		//兼容火狐浏览器
		window.addEventListener('DOMMouseScroll',mouseScroll,false);
	}
	window.onwheel = mouseScroll;
	function handle(num,arr) {
		var index;
		for(var i=0;i<arr.length;i++){//得到当前checked元素的下标
		    if(arr[i].checked) {
		    	//用于判断下一个或者上一个盒子
		        index = i;
		    }
		}
		if(num<0 && index<4) {			//向下滚动
		    index++;
		    arr[index].checked = true;	//选中状态
		}else if(num>0 && index>0) {	//向上滚动
		    index--;
		    arr[index].checked = true;
		}
	}
	/*
		resume的背景自动切换
	*/
	// var oBg = document.getElementById("box1");
	var oBg = document.getElementById("container");
	var a = 1;
	function change() {
		if (a>=4) {
			a=1;
		}
		oBg.style.background = "url(images/bg"+a+".jpg)";
		oBg.style.backgroundSize = "100% 100%";
		a++;
	}
	window.setInterval(change,3000);
	/*
		单个按钮导航
	*/
	// var oContainer = document.getElementById("container");
	var aInput = document.getElementsByClassName("nav");
	var oCont = document.getElementsByClassName("content")[0];
	var aSpan = oCont.getElementsByTagName("span");
	// console.log(aInput)
	for(var i = 0; i < aSpan.length; i++){
		// 为每个span添加一个属性并赋值
		aSpan[i].index = i+1;
		// 给每个span添加点击事件
		aSpan[i].onclick = function() {
			//点击最后一个的时候让它回到第一个页面
			if (this.index == aSpan.length) {
				aInput[0].checked = true;
			}else {
				aInput[this.index].checked = true;
			}
		}
	}
}