const SUITS = ["&hearts;", "&diams;", "&spades;", "&clubs;"]
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

export class Card {
    constructor(suit,  value){
        this.suit = suit
        this.value = value
    }

    get get_suit(){
        return this.suit
    }

    get get_value(){
        return this.value
    }
}

export default class Deck {
    constructor(cards = newDeck()){
        this.cards = cards
    }

    shuffle(){
        var temp_deck = this.cards
        var shuffled_deck = []
        while(temp_deck.length > 0){
            var rand_num = Math.floor(Math.random() * temp_deck.length)
            shuffled_deck.push(temp_deck[rand_num])
            temp_deck.splice(rand_num, 1)
        }
        this.cards = shuffled_deck
    }
    
    deal(num_players){
        var start = 0
        var hand_len = this.cards.length/num_players
        var hands = []
        for(let i = 0; i < num_players; i++){
            start = start + (hand_len*i)
            hands.push(this.cards.slice(start, start+hand_len))
        }
        return hands
    }

    compare_values(cards){
        var highest_val = 0
        var highest_player = -1
        for(let i = 0; i < cards.length; i++){
            if(cards[i].get_value == "J") {
                if(11 > highest_val){
                    highest_val = 11
                    highest_player = i
                }
            }
            else if(cards[i].get_value == "Q") {
                if(12 > highest_val){
                    highest_val = 12
                    highest_player = i
                }
            }
            else if(cards[i].get_value == "K") {
                if(13 > highest_val){
                    highest_val = 13
                    highest_player = i
                }
            }
            else if(cards[i].get_value == "A") {
                if(14 > highest_val){
                    highest_val = 14
                    highest_player = i
                }
            }
            else{
                value = parseInt(cards[i].get_value)
                if(value > highest_val){
                    highest_val = value
                    highest_player = i
                }
            }
        }
        return highest_player
    }
}

function newDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}