//使用setInterval解决长按控制键移动坦克顿卡问题
		var t=false;
		var r=false;
		var b=false;
		var l=false;
		
		
		//控制自己的坦克
		function sendCommand(ev){
			var oEvent=ev||event;
			
			switch(oEvent.keyCode){
				case 87 :             // W->top
				   t=true;
				   break;
				case 68:             // D-> right
					r=true;
					break;
				case 83:			// S->bottom
					b=true;
					break;
				case 65:  			//A->left
					l=true;
					break;
				case 74:			//J->shot
					MyTank.shot();
					break;
				case 13:
					if(stop==false){
						stop=true;
					}else{
						stop=false;
					}
			}
		}
		
		setInterval(function(){
			//console.log(t);
			if(t){
				MyTank.moveUp();
			}else if(r){
				MyTank.moveRight();
			}else if(b){
				MyTank.moveDown();
			}else if(l){
				MyTank.moveLeft();
			}
		},50)
		
		function keyUp(ev){
			var oEvent=ev||event;
			
			switch(oEvent.keyCode){
				case 87 :             // W->top
				   t=false;
				   break;
				case 68:             // D-> right
					r=false;
					break;
				case 83:			// S->bottom
					b=false;
					break;
				case 65:  			//A->left
					l=false;
					break;
			}
		}
		