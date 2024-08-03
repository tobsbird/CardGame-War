import War from './war.js'

console.log("HERE:))")
const war = new War()
var win = 0
var results = -1
while(win == 0){
    console.log("size1: " + war.player1.cards.length)
    console.log("size2: " + war.player2.cards.length)
    results = war.turn()
    console.log(results)
    if(results == 0) win = 1
}
console.log("done")
console.log(war.winner())
