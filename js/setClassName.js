function hasClass(element,cName){
	
	return !!element.className.match(new RegExp("(\\s|^)"+cName+"(\\s|$)"));
	//判断前面是否有空格（\\s|$）判断后面是否有空格 两个感叹号转换为布尔值方便判断
}



function addclass(element,cName){
		if(!hasClass(element,cName)){
			//console.log(hasClass(element,cName));
			element.className+=' '+cName;
		}
}

function removeClass(element,cNames){
	
	for(var i=0; i<cNames.length ; i++){
		var cName=cNames[i];
		
		if(hasClass(element,cName)){
			
		element.className=element.className.replace(new RegExp("(\\s|^)"+cName+"(\\s|$)"),'');
		//replace 替换为空
	}
	}
	
	
}
