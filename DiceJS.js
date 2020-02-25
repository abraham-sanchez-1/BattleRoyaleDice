

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
for (let i = 0; i < 10; i++) {
    players[i].score = RollDiceSet();
    
    
}
    console.log(players);
    players.sort(function(a,b){return a.score - b.score});
    players.reverse();
    players.pop();
    players.pop();
    console.log(players);

    
}

function RoundFourAndFive(players){
    for (let i = 0; i < 8; i++) {
        players[i].score = RollDiceSet();
        
        
    }
        console.log(players);
        players.sort(function(a,b){return a.score - b.score});
        players.reverse();
        players.pop();
        console.log(players);
}
 function FinalRound(players){


 } 
 function RollDiceSet(){
    var result = 0;
     for (let i = 0; i < DiceTotals.length; i++) {
         result += DiceSum(DiceTotals[i]);
         
     };
     
     return result;
 }
 function DiceShootOut(){

 }
 function DiceSum(Limit){
     return Math.floor((Math.random() * Limit)+1);
 }


PopulatePlayers();
console.log(players);
RoundOneThruThree(players);
console.log(players);
