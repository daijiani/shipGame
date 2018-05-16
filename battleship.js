var view = {
  displayMessage: function(msg) {
    var messageArea = docunment.getElementByld("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
var model ={
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipsLength: 3,
  ships: [{ locations: ["06", "16", "26"], hits:["", "", ""]}],
}