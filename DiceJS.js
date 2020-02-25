

var players = [];
var rounds = 6;
var DiceTotals = [4, 6, 8, 10, 12, 20];
function RollD20Dice(){

    console.log("Hello world");
}

function PopulatePlayers(){
    for (let i = 0; i < 10; i++) {
        var player = {name: "Player " + (i+1), score: 0};
        players.push(player);
    }
    console.log(players);
}

function RoundOneThruThree(players){
for (let i = 0; i < players.length; i++) {
    players[i].score = RollDiceSet();
    
    
}
    console.log(players);
    players.sort(function(a,b){return a.score - b.score});
    
    players.splice(0,2);
    console.log(players);

    
}

function RoundFourAndFive(players){
    for (let i = 0; i < players.length; i++) {
        players[i].score = RollDiceSet();
        
        
    }
        console.log(players);
        players.sort(function(a,b){return a.score - b.score});
       
        players.shift();
        console.log(players);
}
 function FinalRound(players){
    var dTwentyRollsForPlayerOne = [];
    for (let i = 0; i < 4; i++) {
        dTwentyRollsForPlayerOne.push(randomDiceTotal(20));
        
    }
    players[0].score = dTwentyRollsForPlayerOne[(randomDiceTotal(4))-1]
    
    var dTwentyRollsForPlayerTwo = [];
    for (let i = 0; i < 4; i++) {
        dTwentyRollsForPlayerTwo.push(randomDiceTotal(20));
        
    }
    players[1].score = dTwentyRollsForPlayerOne[(randomDiceTotal(4))-1]
    if (players[0].score > players[1].score) {
        console.log(players[0].name + " wins!");
    }
    else if (players[0].score == players[1].score)
    {
        console.log("Tie, repeating final round");
        FinalRound(players);
    }
    else
    {
        console.log(players[1].name + " wins!");
    }
}

  
 function RollDiceSet(){
    var result = 0;
     for (let i = 0; i < DiceTotals.length; i++) {
         result += randomDiceTotal(DiceTotals[i]);
         
     };
     
     return result;
 }
 function randomDiceTotal(Limit){
     return Math.floor((Math.random() * Limit)+1);
 }


PopulatePlayers();

RoundOneThruThree(players);
RoundOneThruThree(players);
RoundOneThruThree(players);
RoundFourAndFive(players);
RoundFourAndFive(players);
FinalRound(players);



