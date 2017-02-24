//创建一个tank类
function Tank(x,y,direct,speed,type){
	this.x=x;
	this.y=y;
	this.div=this.CreateTank(type)
	this.speed=speed;
	this.direct=direct;
	this.type=type;
	this.isLive=true;
	
	this.moveUp=function(){
		this.direct=0;      //0 -> top
		if(this.y<=0)return;
		this.y-=this.speed;
		
	}
	this.moveRight=function(){
		this.direct=1;    //1 -> right
		if(this.x>=560)return;
		this.x+=this.speed;
		
	}
	this.moveDown=function(){
		this.direct=2;   //2 -> bottom
		if(this.y>=560)return;
		this.y+=this.speed;
		
		
	}
	this.moveLeft=function(){
		this.direct=3;   // 3-> left
		if(this.x<=0)return;
		this.x-=this.speed;
		
	}
}


Tank.prototype.CreateTank=function(cName){
	var oNewDiv=document.createElement('div');
	oNewDiv.className=cName;
	oMap.appendChild(oNewDiv);
		
	return oNewDiv;
}

//创建MyTank类
function MyTank(x,y,direct,speed,type){
	//对象冒充
	Tank.call(this,x,y,direct,speed,type);
	this.shot=function(){
		switch(this.direct){
			case 0:
				MyBullet=new Bullet(this.x+19,this.y,this.direct,5,'my',this,'Bullet');
				break;
			case 1:
				MyBullet=new Bullet(this.x+19,this.y+18,this.direct,5,'my',this,'Bullet');
				break;
			case 2:
				MyBullet=new Bullet(this.x+19,this.y+40,this.direct,5,'my',this,'Bullet');
				break;
			case 3:
				MyBullet=new Bullet(this.x,this.y+19,this.direct,5,'my',this,'Bullet');
				break;
		}
		MyBullets.push(MyBullet);
		var timer=setInterval('MyBullets['+(MyBullets.length-1)+'].run()',50);
		//把timer赋给这个子弹
		MyBullets[MyBullets.length-1].timer=timer;
		
		
	}
}
for(var i in Tank.prototype){
	MyTank.prototype[i]=Tank.prototype[i];
}


//创建EnemyTank类
function EnemyTank(x,y,direct,speed,type){
	//对象冒充达到继承
	this.tank=Tank;
	this.tank(x,y,direct,speed,type);
	delete this.tank;
	

	this.count=0;
	this.timer=null;
	this.BulletIsLive=false;
}
for(var i in Tank.prototype){
	EnemyTank.prototype[i]=Tank.prototype[i];
}
EnemyTank.prototype.run=function(){
	if(stop)return;
	if(this.isLive==false){
		clearInterval(this.timer);
		return false;
	}else{
		
		switch(this.direct){
			case 0:
				if(this.y>=0){
					this.y-=this.speed;
				}
				break;
			case 1:
				if(this.x<=560){
					this.x+=this.speed;
				}
				break;
			case 2:
				if(this.y<=560){
					this.y+=this.speed;
				}
				break;
			case 3:
				if(this.x>=0){
					this.x-=this.speed;
				}
				break;
	}
	//用随机数控制方向
	if(this.count>=30){
		this.direct=Math.round(Math.random()*3);
		this.count=0;
	}
	this.count++;
	
	//判断敌人是否活着
	if(this.isLive){
		//判断子弹是否活着
		if(this.BulletIsLive==false){
			switch(this.direct){
				case 0:
					EnemyBullet=new Bullet(this.x+19,this.y,this.direct,5,'enemy',this,'Bullet1');
					break;
				case 1:
					EnemyBullet=new Bullet(this.x+40,this.y+19,this.direct,5,'enemy',this,'Bullet1');
					break;
				case 2:
					EnemyBullet=new Bullet(this.x+19,this.y+40,this.direct,5,'enemy',this,'Bullet1');
					break;
				case 3:
					EnemyBullet=new Bullet(this.x-40,this.y+19,this.direct,5,'enemy',this,'Bullet1');
					break;
			}
			EnemyBullets.push(EnemyBullet);
			var timer=setInterval('EnemyBullets['+(EnemyBullets.length-1)+'].run()',50);
			EnemyBullets[EnemyBullets.length-1].timer=timer;
			this.BulletIsLive=true;
		}
	}
	}
	
}

