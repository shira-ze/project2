  // three === checks that its the same TYPE (like str or int)
var currentPlayer = "O";
var board = [
  [document.getElementById("11"), document.getElementById("12"), document.getElementById("13")], [document.getElementById("21"), document.getElementById("22"), document.getElementById("23")], [document.getElementById("31"), document.getElementById("32"), document.getElementById("33")],
]
//  this ^ does same thing as ↓ so top is commented out- both create a matrix holding the possible locations in the grid
//
// var board = [["","",""]["","",""]["","",""]];
// var x = 0;
// var y = 0;
// for(x=0; x<3; x++) {
//   for (y=0; y<3; y++){
//     board [x][y] = document.getElementById(`${x + 1}${y + 1}`);
//   }
// }

function checkRow(row){
  var x = 0;
  for (x=0; x<3; x++){
    if (board[row][x].innerText != currentPlayer){
      return false;
    }
  }
  return true;
}

// && = and
function checkColumn(col){
  var x = 0;
  for (x=0; x<3; x++){
    if (board[x][col].innerText != currentPlayer){
      return false;
    }
  }
  return true;
}

function checkDiagonal(){
  var diagonal1 = board[0][0].innerHTML === currentPlayer && board[1][1].innerHTML === currentPlayer  && board[2][2].innerHTML === currentPlayer;
  var diagonal2 = board[0][2].innerHTML === currentPlayer && board[1][1].innerHTML === currentPlayer && board[2][0].innerHTML === currentPlayer;
  return diagonal1 || diagonal2;
}

function checkWin(){
  var i = 0;
  for(i = 0; i < 3; i++){
    if(checkColumn(i) || checkRow(i)){
      return true;
    }
  }
  return checkDiagonal();
}


// !!!!! fix trun function so doesn't automatically go to wins!!!!!!!!!


function turn(){
  if(event.target.innerText === ""){
    event.target.innerText = currentPlayer;
    if(checkWin()){
      document.body.innerHTML = `<center id="winner">${currentPlayer} wins! </center>`
    }
    else{
      currentPlayer = currentPlayer === "X"?   "O" : "X";
    }
  }
  else{
      alert("you've already clicked this");
  }
}
