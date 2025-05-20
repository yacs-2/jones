let isXTurn = true;
let squareArr = document.querySelectorAll(".square");

for(const _element of squareArr) {
  _element.addEventListener("click", markSquare);
}

function markSquare(_square) {
  if (_square.srcElement.innerText != "x" && _square.srcElement.innerText != "o") {
  if (isXTurn) {
    _square.srcElement.innerText = "x";
  } else {
    _square.srcElement.innerText = "o";
  }
  
  if (checkComplete()) {
    let winnerDiv = document.getElementById("winner")
    winnerDiv.style.display = "block";
    let winnerText = document.querySelector("winner div")
    winnerDiv.innerHTML = isXTurn ? "Player X wins!" : "Player O wins!";
    console.log("game over")
  }
  isXTurn = !isXTurn;
  }
}

function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((squareArr[_i].innerText == "x" || squareArr[_i].innerText == "o" )
      && squareArr[_i].innerText == squareArr[_i + 3].innerText
        && squareArr[_i].innerText == squareArr[_i + 6].innerText
      ) return true;
    else if ((squareArr[3 * _i].innerText == "x" || squareArr[3 * _i].innerText == "o" )
      && squareArr[_i].innerText == squareArr[_i + 1].innerText
        && squareArr[_i].innerText == squareArr[_i + 2].innerText
      ) return true;
      
  }
  
  if ((squareArr[0].innertext == "x" || squareArr[0].innertext == "o")
    && squareArr[0].innerText == squareArr[4].innerText
    && squareArr[0].innerText == squareArr[8].innerText
    )return true;
  
  if ((squareArr[2].innertext == "x" || squareArr[2].innertext == "o")
    && squareArr[2].innerText == squareArr[4].innerText
    && squareArr[2].innerText == squareArr[6].innerText
    )return true;
  else return false;
  
}  
