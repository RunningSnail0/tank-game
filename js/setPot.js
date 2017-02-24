//设置位置
function setPos(arr){
	if(arr.length==0)return;
	var len=arr.length;
	for(var i=0; i<len; i++){
		var obj=arr[i];
	
		obj.div.style.left=obj.x+'px';
		obj.div.style.top=obj.y+'px';
		
		switch(obj.direct){
			case 0:
				removeClass(obj.div,['l','r','b']);
			 	addclass(obj.div,'t');
			 	break;
			case 1:
				removeClass(obj.div,['l','t','b']);
				addclass(obj.div,'r');
				break;
			case 2:
				removeClass(obj.div,['l','t','r']);
				addclass(obj.div,'b');
				break;
			case 3:
				removeClass(obj.div,['b','t','r']);
				addclass(obj.div,'l');
				break;
		}
		
		//如果obj的元素死亡，则将其删掉
		if(obj.isLive==false){
			
	         var _parentElement = obj.div.parentNode;
	         if(_parentElement){
	                _parentElement.removeChild(obj.div);
	         }
	         
	         
		}
		
		
		
	}

	
	
}
