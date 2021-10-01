import Deck from './deck.js'

const deck = new Deck()
console.log(deck.cards)

deck.shuffle();
console.log(deck.cards)

deck.deal(2);
console.log(deck.cards)

var test_card = deck.cards.pop
console.log(test_card.value)