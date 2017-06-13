process.stdin.setEncoding('utf8');

var player1 = null;
var player2 = null;

process.stdout.write("Welcome to the JS Tic Tac Toe Game. Players, please enter your names so that we may begin." + "\n");

function getPlayerNames() {
  process.stdout.write("Player 1, please enter your name")  
  process.stdin.on('data', function(text){
      player1 = text;
  });  
  process.stdout.write("Player 2, please enter your name")  
  process.stdin.on('data', function(text){
      player2 = text;
  });
    

  if (player1 != null && player2 != null){
    process.stdout.write(`Welcome ${player1} and ${player2}. Shall we play a game?`);
  }
}

if (player1 === null && player2 === null) {
  getPlayerNames();
}



