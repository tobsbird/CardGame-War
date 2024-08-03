import Deck from './deck.js'

// Compares each card's value returning the player with the highest card
export function compare_values(cards){
    var highest_val = 0
    var highest_player = -1
    var value = 0
    var cur_card = ""
    for (let i = 0; i < cards.length; i++){
        cur_card = cards[i].get_value
        switch (cur_card) {
            case "J":
                value = 11
                break
            case "Q":
                value = 12
                break
            case "K":
                value = 13
                break
            case "A":
                value = 14
                break
            default : 
                value = parseInt(cur_card)
                break
        }
        if (value > highest_val){
            highest_val = value
            highest_player = i
        }
    }
    return highest_player
}