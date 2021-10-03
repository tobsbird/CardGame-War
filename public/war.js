import Deck from './deck.js'
import Card from './deck.js'

export default class War{
    constructor(){
        var game_deck = new Deck()
        game_deck.shuffle()
        var hands = game_deck.deal(2)
        this.player1 = new Deck(hands[0])
        this.num_cards1 = this.player1.cards.length
        this.player2 = new Deck(hands[1])
        this.num_cards2 = this.player2.cards.length
    }

    /*
    get get_num_cards1(){
        return this.player1.length
    }

    get get_num_cards2(){
        return this.player2.length
    }*/

    turn(){
        var cards_played = []
        var card1 = this.player1.cards.pop()
        var card2 = this.player2.cards.pop()
        console.log("card1: " + card1.value + " ; card2: " + card2.value)
        cards_played.push(card1, card2)
        if(card1.value == card2.value) {
            var results = this.war_begin(cards_played)
            return results
        }
        else if(parseInt(card1.value) > parseInt(card2.value)) this.player1.cards = cards_played.concat(this.player1.cards)
        else this.player2.cards = cards_played.concat(this.player2.cards)
        if(this.check_win() > 0) return 0
        else return 1
    }

    war_begin(cards_played){
        var card1
        var card2
        while(true){
            console.log("WAR!!")
            for(let i = 0; i < 2; i ++){
                if(this.check_win() > 0) return 0
                cards_played.push(this.player1.cards.pop())
                cards_played.push(this.player2.cards.pop())
            }
            if(this.check_win() > 0) return 0
            card1 = this.player1.cards.pop()
            card2 = this.player2.cards.pop()
            console.log("card1: " + card1.value + " ; card2: " + card2.value)
            cards_played.push(card1, card2)
            if(card1.value != card2.value) break
        }
        if(parseInt(card1.value) > parseInt(card2.value)) {
            this.player1.cards = cards_played.concat(this.player1.cards)
        }
        else {
            this.player2.cards = cards_played.concat(this.player2.cards)
        }
        if(this.check_win() > 0) return 0
        else return 1
    }

    check_win(){
        if(this.player1.cards.length == 0) return 1
        else if(this.player2.cards.length == 0) return 2
        else return -1
    }
    
    winner(){
        if(this.player1.cards.length == 0) console.log("player1")
        else if(this.player2.cards.length == 0) console.log("player2")
    }
}