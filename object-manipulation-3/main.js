console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'Delbert', hand: {} },
  { name: 'Jonathan', hand: {} },
  { name: 'Levi', hand: {} },
  { name: 'Perry', hand: {} }
];

var deck = [
  { rank: 'A', suit: 'clubs' },
  { rank: 2, suit: 'clubs' },
  { rank: 3, suit: 'clubs' },
  { rank: 4, suit: 'clubs' },
  { rank: 5, suit: 'clubs' },
  { rank: 6, suit: 'clubs' },
  { rank: 7, suit: 'clubs' },
  { rank: 8, suit: 'clubs' },
  { rank: 9, suit: 'clubs' },
  { rank: 10, suit: 'clubs' },
  { rank: 'J', suit: 'clubs' },
  { rank: 'Q', suit: 'clubs' },
  { rank: 'K', suit: 'clubs' },
  { rank: 'A', suit: 'diamonds' },
  { rank: 2, suit: 'diamonds' },
  { rank: 3, suit: 'diamonds' },
  { rank: 4, suit: 'diamonds' },
  { rank: 5, suit: 'diamonds' },
  { rank: 6, suit: 'diamonds' },
  { rank: 7, suit: 'diamonds' },
  { rank: 8, suit: 'diamonds' },
  { rank: 9, suit: 'diamonds' },
  { rank: 10, suit: 'diamonds' },
  { rank: 'J', suit: 'diamonds' },
  { rank: 'Q', suit: 'diamonds' },
  { rank: 'K', suit: 'diamonds' },
  { rank: 'A', suit: 'hearts' },
  { rank: 2, suit: 'hearts' },
  { rank: 3, suit: 'hearts' },
  { rank: 4, suit: 'hearts' },
  { rank: 5, suit: 'hearts' },
  { rank: 6, suit: 'hearts' },
  { rank: 7, suit: 'hearts' },
  { rank: 8, suit: 'hearts' },
  { rank: 9, suit: 'hearts' },
  { rank: 10, suit: 'hearts' },
  { rank: 'J', suit: 'hearts' },
  { rank: 'Q', suit: 'hearts' },
  { rank: 'K', suit: 'hearts' },
  { rank: 'A', suit: 'spades' },
  { rank: 2, suit: 'spades' },
  { rank: 3, suit: 'spades' },
  { rank: 4, suit: 'spades' },
  { rank: 5, suit: 'spades' },
  { rank: 6, suit: 'spades' },
  { rank: 7, suit: 'spades' },
  { rank: 8, suit: 'spades' },
  { rank: 9, suit: 'spades' },
  { rank: 10, suit: 'spades' },
  { rank: 'J', suit: 'spades' },
  { rank: 'Q', suit: 'spades' },
  { rank: 'K', suit: 'spades' }
];

var shuffledDeck = _.shuffle(deck);
// ^ this shuffles the established order of 'deck'

for (var i = 0; i < players.length; i++) {
  players[i].hand = shuffledDeck.splice(0, 2);
}

function addCardPoints(playerHand) {
  var count = 0;
  for (var i = 0; i < playerHand.length; i++) {
    if (playerHand[i].rank === 'A') {
      count += 11;
    } else if (playerHand[i].rank === 'K' || playerHand[i].rank === 'Q' || playerHand[i].rank === 'J' || playerHand[i].rank === 10) {
      count += 10;
    } else if (playerHand[i].rank === 9) {
      count += 9;
    } else if (playerHand[i].rank === 8) {
      count += 8;
    } else if (playerHand[i].rank === 7) {
      count += 7;
    } else if (playerHand[i].rank === 6) {
      count += 6;
    } else if (playerHand[i].rank === 5) {
      count += 5;
    } else if (playerHand[i].rank === 4) {
      count += 4;
    } else if (playerHand[i].rank === 3) {
      count += 3;
    } else if (playerHand[i].rank === 2) {
      count += 2;
    }
  }
  return count;
}

var highScore = 0;
var highScoreName = '';
for (var j = 0; j < players.length; j++) {
  if (addCardPoints(players[j].hand) > highScore) {
    highScore = addCardPoints(players[j].hand);
    highScoreName = players[j].name;
  } else {
    continue;
  }
}

console.log(highScoreName, 'is the winner with a score of', highScore + '!');
