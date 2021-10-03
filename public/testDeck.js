import Deck from './deck.js'
import Card from './deck.js'
import War from './war.js'

const deck = new Deck()
console.log(deck.cards)

deck.shuffle();
console.log(deck.cards)

deck.deal(2);
console.log(deck.cards)

var test_card = deck.cards.pop()
console.log(test_card.value)

const war = new War()
var win = 0
while(win == 0){
    console.log("size1: " + war.player1.cards.length)
    console.log("size2: " + war.player2.cards.length)
    var results = war.turn()
    console.log(results)
    if(results == 0) win = 1
}
console.log("done")
console.log(war.winner())