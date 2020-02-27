

var players = [];
var rounds = 6;
var DiceTotals = [4, 6, 8, 10, 12, 20];
var round = 1;

function populatePlayers(){
    for (let i = 0; i < 10; i++) {
        var player = {name: "Player " + (i+1), score: 0};
        players.push(player);
    }
    console.log(players);
    createTable();
    roundButton();
}

function RoundOneThruThree(players){
for (let i = 0; i < players.length; i++) {
    players[i].score = RollDiceSet();
    
    
}
    console.log(players);
    players.sort(function(a,b){return a.score - b.score});
    
    var removedPlayers = players.splice(0,2);
    console.log(players);
    alert(removedPlayers[0].name + ' and ' + removedPlayers[1].name + ' lost with scores of ' + removedPlayers[0].score + ' and ' + removedPlayers[1].score + ' respectively' );
    createTable();
    
}

function RoundFourAndFive(players){
    for (let i = 0; i < players.length; i++) {
        players[i].score = RollDiceSet();
        
        
    }
        console.log(players);
        players.sort(function(a,b){return a.score - b.score});
       
        var removedPlayers = players.shift();
        console.log(players);
        alert(removedPlayers.name + ' lost with a score of ' + removedPlayers.score);
        createTable();
        
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
        alert(players[0].name + ' has won with a score of ' + players[0].score + '!');
        players.pop();
        displayWinner();
    }
    else if (players[0].score == players[1].score)
    {
        console.log("Tie, repeating final round");
        alert('Players tied with a score , close alert to automatically retry!');
        FinalRound(players);
    }
    else
    {
        console.log(players[1].name + " wins!");
        alert(players[1].name + ' has won with a score of ' + players[1].score + '!');
        players.shift();
        displayWinner();
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
function createTable(){
    var table = '';
    var rows = players.length;
    var cols = 2;
    table += '<thead><tr><th>Player Number</th><th>Score</th></tr></thead><tbody>';
    for (let i = 0; i < rows; i++) {
        table += '<tr class="table-primary">';
        table += '<td>' + players[i].name + '</td>';
        table += '<td>' + players[i].score + '</td>';  
        table += '</tr>';
        
    }
    document.getElementById("playerTable").innerHTML =   '<table class="table table-hover" align="center">' + table + '</tbody></table>';
}
function displayWinner(){
    
    document.getElementById("playerTable").innerHTML =   '<div class="container p-3 my-3 bg-dark text-white"><h4 class="text-white">'+ players[0].name + ' is the winner!</h4></div>';
}


function startGame(){
    document.getElementById("jumboDissapear").style.display="none";
    populatePlayers();
}
function roundButton(){
 document.getElementById("roundButton").innerHTML = '<button onclick="roundStart()" type="button" class="btn btn-outline-success btn-large">Round '+ round +'</button>';

}
function restartButton(){
    
    document.getElementById("roundButton").innerHTML = '<button onclick="restartGame()" type="button" class="btn btn-outline-info btn-large">Restart Game</button>';
       
       

}
function restartGame(){
    round = 1;
    emptyList();
    populatePlayers();
}
function emptyList(){
    players.length =0;
}

function roundStart(){
    if (round <4) {
        RoundOneThruThree(players);
        round ++;
        roundButton();
    }
    else if (round >=4 && round <6) {
        RoundFourAndFive(players);
        round++;
        roundButton();
    }
    else{
        FinalRound(players);
        restartButton();
    }

}
// RoundOneThruThree(players);
// RoundOneThruThree(players);
// RoundOneThruThree(players);
// RoundFourAndFive(players);
// RoundFourAndFive(players);
// FinalRound(players);



