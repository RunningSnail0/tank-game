//创建爆炸类
function Bomb(x,y){
	this.x=x;
	this.y=y;
	this.div=this.create();
	this.isLive=true;
	//bomb血量
	this.blood=9;
	this.bloodDown=function(){
		if(this.blood>0){
			this.blood--;
		}else{
			this.isLive=false;
		}
	}
		
}

Bomb.prototype.create=function(){
	var oNewDiv=document.createElement('div');
	oNewDiv.className='bomb';
	oMap.appendChild(oNewDiv);
	return oNewDiv;
}
Bomb.prototype.animate=function(){
	
	for(var i=0; i<bombs.length; i++){
		if(this.blood>6 && this.blood<8){
			addclass(this.div,'bomb1');
		}else if(this.blood>3){
			addclass(this.div,'bomb2');
		}else{
			addclass(this.div,'bomb3');
		}
		this.bloodDown();
		if(this.blood<=0){
			
			this.isLive=false;
			
			
		}
	}
	
}
