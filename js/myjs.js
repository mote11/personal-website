$(function(){
	$('#fullpage').fullpage({
		//设置每一屏背景颜色
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#000','#fff'],
		//设置小圆圈导航栏
		navigation:true,
		//给每一屏设置锚点
		anchors:['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
		//绑定菜单,设定相关属性与anchors的值对应后，菜单可以控制滚动
		menu:"#menu",
		//循环滚动播放
		continuousVertical:true,
			// continuousHorizontal:true,
		//贝塞尔曲线
		easingcss3:'cubic-bezier(0.175,0.885,0.320,1)',
		//当加载某一屏的时候去执行一个函数，link代表锚点名称，index代表当前的屏幕，index从1开始计算
		/* afterLoad: function(origin, destination, direction, trigger){
		        var origin = this;
		
		        //使用 index
		        if(origin.index == 1){
		            // alert(1)
					$('.tb svg tspan').addClass('animated bounceInDown');
		        }
				if(origin.index == 2){
				    alert(2)
				}
				if(origin.index == 3){
				    alert(3)
				}
				if(origin.index == 4){
				    alert(4)
				}
				if(origin.index == 5){
				    alert(5)
				}
		
		     }, */
	    });
})
