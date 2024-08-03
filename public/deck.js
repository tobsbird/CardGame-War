const SUITS = ["&hearts;", "&diams;", "&spades;", "&clubs;"]
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

// Object for a single card in a deck of 52 cards
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

// Object for a deck of 52 unique cards
export default class Deck {
    constructor(cards = newDeck()){
        this.cards = cards
    }

    // Randomly sort the cards in the array
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
    
    // Seperates equal number of cards to each player in the game 
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
} 

// Makes a new deck of cards combining the suit and value arrays
function newDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}