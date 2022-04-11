// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
    restartGame();
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let count = 1;
let letter = "X";
let buttons = [];
let X = [];
let O = [];
let checkX = false;
let checkO = false;
function clickButton(index) {
  if (count <= 9) {
    if (buttons.indexOf(index) == -1) {
      //to prevent cliking the same button
      buttons.push(index);
      fillButton(index, letter);
      count++;
      if (letter === "X") {
        document.getElementById(index).style.color = "green";
        X.push(index);
        letter = "O";
        checkX = checkWinner(X);
        if (checkX) {
          setTimeout(() => {
            winningAlert("Player1");
          }, 500);
          //winningAlert("Player1");
        }
      } else {
        document.getElementById(index).style.color = "red";
        O.push(index);
        letter = "X";
        checkO = checkWinner(O);
        if (checkO) {
          setTimeout(() => {
            winningAlert("Player2");
          }, 500);
          //winningAlert("Player2");
        } else if (
          count == 10 &&
          checkWinner(X) == false &&
          checkWinner(O) == false
        ) {
          setTimeout(() => {
            alert(`Draw`);
          }, 2000);
          // alert(`Draw`);
          restartGame();
        }
      }
    }
    // else {
    //   alert(`this button is clicked `);
    // }
    if (count == 10 && checkWinner(X) == false && checkWinner(O) == false) {
      setTimeout(() => {
        alert(`Draw`);
      }, 500);
      // alert(`Draw`);
      setTimeout(() => {
        restartGame();
      }, 500);
      // restartGame();
    }
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
function checkWinner(player) {
  //let result = false;
  let isSubset = (playerArray, winningArray) =>
    winningArray.every((num) => playerArray.includes(num));
  if (player.length >= 3) {
    if (isSubset(player, [1, 2, 3])) return true;
    else if (isSubset(player, [4, 5, 6])) return true;
    else if (isSubset(player, [7, 8, 9])) return true;
    else if (isSubset(player, [1, 4, 7])) return true;
    else if (isSubset(player, [2, 5, 8])) return true;
    else if (isSubset(player, [3, 6, 9])) return true;
    else if (isSubset(player, [3, 5, 7])) return true;
    else if (isSubset(player, [1, 5, 9])) return true;
    else return false;
  }
}
// function restartGame
function restartGame() {
  count = 1;
  letter = "X";
  buttons = [];
  X = [];
  O = [];
  checkX = false;
  checkO = false;
  fillButton(1, "");
  fillButton(2, "");
  fillButton(3, "");
  fillButton(4, "");
  fillButton(5, "");
  fillButton(6, "");
  fillButton(7, "");
  fillButton(8, "");
  fillButton(9, "");
}
