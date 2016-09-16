console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	alert('You found a match!');	
} else {
  alert('Sorry, try again.');
}

document.getElementsByClassName('board').setAttribute('id', 'game-board');

var gameboard = document.getElementsById('game-board');

var createboard = function(); {
	for (var i = 0; i < card.length; i ++) {

var cardElement = document.createElement('div');

cardElement.className = 'card';

board.appendChild(cardElement);

} 

}

