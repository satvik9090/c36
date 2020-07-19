class Player {
  constructor(){
    //add properties
    this.index=null;
    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//change ref to data base, as all player will be insdide players
//use index property to update 
  update(){
    var playerIndex = "players/player" +this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance:this.distance
    });
  }
  //static fuction iscaled by the class it self eather than byobjectes
  //arrow fuction binds it to orignal objects which call it
  static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    }) 
  }
}
