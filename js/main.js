var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var board = document.getElementById('game-board');

var createboard = function() {
	for (var i = 0; i < cards.length; i ++) {
		 var cardElement = document.createElement('div');
		 cardElement.className = 'card';
		}
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)

		 board.appendChild(cardElement);
         board.appendChild(cardElement);
     }

	};

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src ='https://upload.wikimedia.org/wikipedia/commons/9/9b/Poker-sm-212-Ks.png'>"; // king
	} else {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/Poker-sm-243-Qc.png'>"; //queen
	}

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];

  }


function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();