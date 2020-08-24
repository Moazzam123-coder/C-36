class Game{
    constructor()
    {

    }
    getState()
    {
    var gameStateref = database.ref("gameState");
    gameStateref.on("value",function(data)
    {
    gameState = data.val()

    })
    }
    update(state)
    {
    database.ref("/").update
    ({
    gameState:state
    })
    }
    start()
    {
        if(gameState===0){
    player = new Player();
    player.getCount();
    form = new Form();
    form.display();
    }
}
play()
{
form.hide();
text("GAME START",120,100);
Player.getplayerinfo();
if(Allplayers!==undefined){
    var displayPosition = 130;
    for(var plr in Allplayers){
        if(plr === "player"+ player.index)
        {
            fill("red");
        }
        else{
            fill("black");
        }
        displayPosition +=20;
        text(Allplayers[plr].name+":"+Allplayers[plr].distance,120,displayPosition);
    }
}

if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=50;
player.update();
}
}
}