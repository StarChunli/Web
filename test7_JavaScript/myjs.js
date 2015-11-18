	var grade=88;
	var grade1="B";
	var time;
	var today = new Date(); //对象实例化
	document.write(today);
	//判断当前日期
	
	if (time>=0 && time<12) {
		document.write('Good Morning! \n');
	}else if (time>=12&& time<18) {
		document.write('Good Afternoon! \n');
	}else{
		document.write('Good Evening! \n');
	}
	//用if语句判断成绩
	if (grade>=60 && grade<70) {
		document.write("<h1>不是很好，还需努力!</h1>\n");
		alert("不是很好，还需努力");
	}else if (grade>=70 && grade<85) {
		document.write("<h2>不错哦，继续努力吧!</h2>\n");
		alert("不错哦，继续努力吧!");
	}else if (grade>=85) {
		document.write("<h3>太不可思议了，你太厉害了!</h3>\n");
		alert("太不可思议了，你太厉害了!");
	}else{
		document.write("我无话可说!\n");
		alert("我无话可说!");
	}

	//用switch语句判断成绩
	switch(grade1){
		case "A":
			alert("太不可思议了，你太厉害了!");
			break;
		case "B":
			alert("不错哦，继续努力吧!");
			break;
		case "C":
			alert("不是很好，还需努力");
			break;
		default:
			alert("我无话可说!");
			break;
		}
//按钮的点击实现
function myFunction(name,city){
	alert("Welcome "+name+" to "+city+"!");
}

	