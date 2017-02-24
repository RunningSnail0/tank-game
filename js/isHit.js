//判断是否击中敌人坦克
function isHitEnemyTank(){
	for(var i=0 ; i<MyBullets.length ; i++){
		var Mybullet=MyBullets[i];
		if(Mybullet.isLive){
			
			for(var j=0; j<EnemyTanks.length; j++){
				var EnemyTank=EnemyTanks[j];
				
				if(EnemyTank.isLive){
					switch(EnemyTank.direct){
						case 0:
						case 2:
							if(MyBullet.x>=EnemyTank.x && MyBullet.x<=EnemyTank.x+40 && MyBullet.y>=EnemyTank.y && Mybullet.y<=EnemyTank.y+40){
								
								EnemyTank.isLive=false;
								MyBullet.isLive=false;
								//创建一个爆炸
								var oBomb=new Bomb(EnemyTank.x,EnemyTank.y);
								//将爆炸push进爆炸数组
								bombs.push(oBomb);	
							}
							break;
						case 1:
						case 3:
							if(MyBullet.x>=EnemyTank.x && MyBullet.x<=EnemyTank.x+40 && MyBullet.y>=EnemyTank.y && MyBullet.y<=EnemyTank.y+40){
								
								EnemyTank.isLive=false;
								MyBullet.isLive=false;
								//创建一个爆炸
								var oBomb=new Bomb(EnemyTank.x,EnemyTank.y);
								//将爆炸push进爆炸数组
								bombs.push(oBomb);	
							}
					}
				}
			}
		}
	}
}
//判断自己是否被敌人坦克击中
function isHitMyTank(){
	for(var i=0; i<EnemyBullets.length; i++){
		var EnemyBullet=EnemyBullets[i];
		if(EnemyBullet.isLive && MyTank.isLive){
			if(EnemyBullet.x>=MyTank.x && EnemyBullet.x<=MyTank.x+40 && EnemyBullet.y>=MyTank.y && EnemyBullet.y<=MyTank.y+40){
					EnemyBullet.isLive=false;
					MyTank.isLive=false;
					//创建一个爆炸
					var oBomb=new Bomb(MyTank.x,MyTank.y);
					//将爆炸push进爆炸数组
					bombs.push(oBomb);
								
								
			}
		}
	}
}
