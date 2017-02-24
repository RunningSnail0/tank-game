//创建bullet类
function Bullet(x,y,direct,speed,type,tank,color){
	this.x=x;
	this.y=y;
	this.direct=direct;
	this.isLive=true;
	this.type=type;
	this.timer=null;
	this.speed=speed;
	this.tank=tank;
	this.color=color;
	this.div=this.createBullet();
	
}

Bullet.prototype.run=function(){
	if(stop)return;
	//判断子弹是否已经到边界
	if(this.x<=0 || this.x>=600 || this.y<=0 || this.y>=600 || this.isLive==false){
		//子弹停止
		clearInterval(this.timer);
		//子弹死亡
		this.isLive=false;
		
		if(this.type=='enemy'){
			this.tank.BulletIsLive=false;
		}
		
	}else{
		switch(this.direct){
			case 0:
				this.y-=this.speed;
				break;
			case 1:
				this.x+=this.speed;
				break;
			case 2:
				this.y+=this.speed;
				break;
			case 3:
				this.x-=this.speed;
		}
	}
}

Bullet.prototype.createBullet=function(){
	
		var oNewDiv=document.createElement('div');
		oNewDiv.className=this.color;
		oMap.appendChild(oNewDiv);
		return oNewDiv;
	
	
}

