import Deck from './deck.js'
import { compare_values } from './cardFunctions.js'
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
        this.cur_card_played1 = new Card()
        this.cur_card_played2 = new Card()
    }

    // Take one WAR turn, one card from each player is revealed and compared
    turn(){
        var cards_played = []
        this.cur_card_played1 = this.player1.cards.pop()
        this.cur_card_played2 = this.player2.cards.pop()
        console.log("card1: " + this.cur_card_played1.get_value + " ; card2: " + this.cur_card_played2.get_value)
        cards_played.push(this.cur_card_played1, this.cur_card_played2)
        if(this.cur_card_played1.get_value == this.cur_card_played2.get_value) {
            cards_played.concat(this.war_begin())
        }
        switch (compare_values([this.cur_card_played1, this.cur_card_played2])) {
            case (0): 
                this.player1.cards = cards_played.concat(this.player1.cards)
                break
            case (1): 
                this.player2.cards = cards_played.concat(this.player2.cards)
                break
        }
        if(this.check_win() > 0) return 0
        else return 1
    }

    // Begin WAR if cards revealed were equal value, add all cards to hand of winner player
    war_begin(){
        var cards_in_war = []
        while(true){
            console.log("WAR!!")
            for(let i = 0; i < 2; i ++){
                if(this.check_win() > 0) return 0
                cards_in_war.push(this.player1.cards.pop())
                cards_in_war.push(this.player2.cards.pop())
            }
            if(this.check_win() > 0) return 0
            this.cur_card_played1 = this.player1.cards.pop()
            this.cur_card_played2 = this.player2.cards.pop()
            console.log("card1: " + this.cur_card_played1.get_value + " ; card2: " + this.cur_card_played2.get_value)
            cards_in_war.push(this.cur_card_played1, this.cur_card_played2)
            if(this.cur_card_played1.get_value != this.cur_card_played2.get_value) break
        }
        return cards_in_war
    }

    // Checks if a player has an empty hand, lose condition of WAR
    check_win(){
        if(this.player1.cards.length == 0) return 1
        else if(this.player2.cards.length == 0) return 2
        else return -1
    }
    
    // Prints the winner of the current game of war
    winner(){
        if(this.player1.cards.length == 0) console.log("player1")
        else if(this.player2.cards.length == 0) console.log("player2")
    }
}