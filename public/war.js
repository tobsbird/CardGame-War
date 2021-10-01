import Deck from './deck.js'

export default class War{
    constructor(){
        var game_deck = Deck()
        var hands = game_deck.deal(2)
        this.player1 = Deck(hands[0])
        this.num_cards1 = this.player1.length
        this.player2 = Deck(hands[1])
        this.num_cards2 = this.player2.length
        
    }

    get num_cards(player){
        if(player == 1) return this.player1.length
        else return this.player2.length
    }

    turn(){
        var cards_played = []
        var card1 = this.player1.pop
        var card2 = this.player2.pop
        cards_played.push(card1, card2)
        if(card1.value == card2.value) war_begin(cards_played)
        else if(card1.value < card2.value) {
            this.player1 = cards_played.concat(this.player1)
        }
        else {
            this.player2 = cards_played.concat(this.player2)
        }
    }

    war_begin(cards_played){
        var card1
        var card2
        while(true){
            for(let i = 0; i < 2; i ++){
                cards_played.push(this.player1.pop)
                cards_played.push(this.player0.pop)
            }
            var card1 = this.player1.pop
            var card2 = this.player2.pop
            cards_played.push(card1, card2)
            if(card1.value != card2.value) break
        }
        if(card1.value < card2.value) {
            this.player1 = cards_played.concat(this.player1)
        }
        else {
            this.player2 = cards_played.concat(this.player2)
        }
    }

    check_win(){
        if(this.player1.length == 0) return 1
        else if(this.player2.length == 0) return 2
        else return -1
    }
}