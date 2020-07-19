class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
//we add asynchronous listner which will get  player count only once and xecute get count
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
      playerCount=playerCountRef.val();
      player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play(){
    //hide the form when the game is an play state 
    form.hide();
    textSize(30);
    text("game start",120,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
var display_position=130;
for(var plr in allPlayers){
  // makes current player red and other black 

if(plr==="player"+player.index){
fill("red");
}
else
{fill("black")}
display_position=display_position+20
textSize(15);
//display all player data 
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
}
    }
    //change distance and update in data base 
    if(keyIsDown(UP_ARROW)&&player.index !==null){
player.distance=player.distance+50;
player.update();
    }
  }
}
