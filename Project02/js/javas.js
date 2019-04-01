$(document).ready(function(){

//variable declaration, whosturn keeps track of turn, board is list of 9 elements, "-" used arbitrarily, spotTaken is a list keeping track of whether or not a spot is 
//available to be used, xWins and oWins keep track of the number of wins.

var whosTurn = 0 
var board = ['-','-','-','-','-','-','-','-','-'];
var spotTaken = [0,0,0,0,0,0,0,0,0];
var xWins = 0;
var oWins = 0;

function checkPlayerWin(){ //checkPlayerWin checks whether or not "X" spans a winning combination - that is 3 connections within the 3x3 grid
    if (((board[0] == 'X') && (board[0] == board[1] && board[1] == board[2])) || ((board[3] == 'X') && (board[3] == board[4] && board[4] == board[5])) || ((board[6] == 'X') && (board[6] == board[7] && board[7] == board[8]))  || ((board[0] == 'X') && (board[0] == board[3] && board[3] == board[6])) || ((board[1] == 'X') && (board[1] == board[4] && board[4] == board[7])) || ((board[2] == 'X') && (board[2] == board[5] && board[5] == board[8] )) || ((board[0] == 'X') && (board[0] == board[4] && board[4] == board[8])) || ((board[2] == 'X') && (board[2] == board[4] && board[4] == board[6]))){
        alert("Player X Wins!");  //if a win is found, popup a message that player x wins, clear the board, update score counter
        clear();
	xWins++;
	document.getElementById("xScore").textContent = xWins;
        }
}
function checkPlayer2Win(){ //checkPlayer2Win checks whether or not "O" spans a winning combination - that is 3 connections within the 3x3 g rid
    if (((board[0] == 'O') && (board[0] == board[1] && board[1] == board[2])) || ((board[3] == 'O') && (board[3] == board[4] && board[4] == board[5])) || ((board[6] == 'O') && (board[6] == board[7] && board[7] == board[8]))  || ((board[0] == 'O') && (board[0] == board[3] && board[3] == board[6])) || ((board[1] == 'O') && (board[1] == board[4] && board[4] == board[7])) || ((board[2] == 'O') && (board[2] == board[5] && board[5] == board[8] )) || ((board[0] == 'O') && (board[0] == board[4] && board[4] == board[8])) || ((board[2] == 'O') && (board[2] == board[4] && board[4] == board[6]))){
        alert("Player O Wins!");  //if a win is found, popup a message that player o wins, clear the board, update the score counter 
        clear();
	oWins++;
	document.getElementById("oScore").textContent = oWins;

    }
        }
function checkForDraw(){ //if a draw occurs, that means every spot in the board is occupied (spotTaken entires are all 1), but checkPlayerWin and checkPlayer2Win could
			// not detect a winning combination
 
            if (spotTaken[0] == 1 && spotTaken[1] == 1 && spotTaken[2] == 1 && spotTaken[3] == 1 && spotTaken[4] == 1 && spotTaken[5] == 1 && spotTaken[6] == 1 && spotTaken[7] == 1 && spotTaken[8] == 1 ){
                       alert("The game is a tie!"); //if a tie is detected, popup a message that it is a tie, and clear the board.
                       clear();
                    }
           }

function clear(){ //clear restores the settings other score to default in preparation for a new game. It clears the board, sets the turn to 0, and resets all spotTaken values
		 // to 0. Additionally, every reference as ary has its value reset to -.
  whosTurn = 0;
  board = ["-","-","-","-","-","-","-","-"];
  spotTaken = [0,0,0,0,0,0,0,0,0]
  $(".ary").text("-");
}

function player1Turn (id){ //this function plays as the X move.
  if (spotTaken[id] == 0 && whosTurn == 0){ //because I call both functions simultaneously, i need to check whether or not it is actually player 1's turn.
  						// i also need to know whether or not the move is valid, so i check whosTurn and spotTaken
          whosTurn = 1;
          board[id] = 'X';       //shift turn to player 2, place X in the board, update X to corresponding id in the HTML, set spot taken, then check for win and draw.
	$("#"+id).text('X'); 
        spotTaken[id] = 1;
          checkPlayerWin();
          checkForDraw();
    }

    }
  
function player2Turn (id) { //this function plays as the O move.
    if (spotTaken[id] == 0 && whosTurn == 1) { //because I call both functions simultaneously, i need to check whether or not it is actually player 2's turn.
						// i also need to know whether or not the move is valid, so i check whosTurn and spotTaken
            whosTurn = 0;
            board[id] = 'O';
            $("#"+id).text('O');  //shift turn to player 1, place O in the board, update O to corresponding id in the HTML, set spot taken, then check for win and draw.
              spotTaken[id] = 1;  
            checkPlayer2Win(); 
            checkForDraw();
            }

        }

$(".ary").click(function(){ //used jquery library and formatting https://www.w3schools.com/jquery/
      player1Turn($(this).attr('id')); //assume both players are able to move when clicked, but we check to see who "actually moves"
      player2Turn($(this).attr('id'));
 });     
});