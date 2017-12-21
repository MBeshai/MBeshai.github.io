

var changeWeight = 4; 
var ROCK = 0;
var PAPER = 1;
var SCISSORS = 2;
var moves = [ROCK, PAPER, SCISSORS];
var movesChars = ['r', 'p', 's'];
var moveWords = ['Rock', 'Paper', 'Scissors'];

var lastPlayerMove = Math.floor(Math.random(0, moves.length)); 
var lastComputerMove = Math.floor(Math.random(0, moves.length)); 

var MarkovWins = 0;
var playerScore = 0;
var ties = 0;

var WIN = 1;
var TIE = 0;
var LOSS = -1;

var prob = [];

for (var i = 0; i < moves.length; i++) {
    prob[i] = [];
    for (var j = 0; j < moves.length; j++) {
        prob[i][j] = [];
        for (var k = 0; k < moves.length; k++) {
            prob[i][j][k] = 1 / moves.length;
        }
    }
}

var updateProbability = function (lastPlayerMove, lastCompMove,
                                 playerMove) {
    var from = prob[lastPlayerMove][lastCompMove];
    var r = from[ROCK],
        p = from[PAPER],
        s = from[SCISSORS];


    for (var i = 0; i < from.length; i++) {
    
        if (i === playerMove) {
            from[i] *= changeWeight;
        } else {
            from[i] *= (1 - changeWeight * r) / (p + s);
        }

        
        from[i] = constrain(from[i], 0.025, 0.95);
    }
};

var getMove = function (lastPlayerMove, lastCompMove) {
    var from = prob[lastPlayerMove][lastCompMove];
    var r = from[ROCK],
        p = from[PAPER],
        s = from[SCISSORS];

    var rand = Math.random(0, 1);
    if (rand < r) { 
        return PAPER; 

    } else if (rand < r + p) { 
        return SCISSORS; 

    } else {
        return ROCK; 
    }
};
function constrain(e,t,r){return e>r?r:e<t?t:e}


function playGame (playerKey) {
    var compMove = getMove(lastPlayerMove, lastComputerMove);
    if (compMove == 0) {
        document.getElementById("computerPic").src = "r.jpg";
    }
    else if (compMove == 1) {
        document.getElementById("computerPic").src = "p.jpg";

    }
    else {
        document.getElementById("computerPic").src = "s.jpg";

    }
    var playerMove = ROCK;
    if (playerKey === 'p') { playerMove = PAPER; }
    if (playerKey === 's') { playerMove = SCISSORS; }

    if (compMove === playerMove) {
        ties++;
        document.getElementById("draws").innerHTML = ties;

    }
    else if ((compMove + 1) % 3 === playerMove) {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;

    }
    else {
        MarkovWins++;
        document.getElementById("computerScore").innerHTML = MarkovWins;

    }

    updateProbability(lastPlayerMove, lastComputerMove, playerMove);

    lastComputerMove = compMove;
    lastPlayerMove = playerMove;
};


