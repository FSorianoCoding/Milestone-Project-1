// Blackjack
// SIMPLE GAME

// Find code for that accounts for a single deck of cards.  Reshuffles the deck after each game.
// Define variable I will need to create a deck and use with functions.
let deck = []

// Images will not be applied yet so need to create arrays of card numbers and matching suits.


function createDeck() {
    deck = [];   
    let suits = ["C", "D", "H", "S"]  
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
    for (let i=0; i < numbers.length; i++) {   
        for (let s=0; s < suits.length; s++) {
            deck.push(numbers[i] + suits[s])
        }    
    }
    return deck
}



function shuffleDeck() {
    // Found the Durstenfeld algorithm to shuffle an array
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Need to find a way to assign value to cards for using to determine score.
function assignValues (card) {
    number = card[0]
    if (isNaN(number)) {  
        if (number == "A") {
            return number = 11;            
        } 
    else return number = 10        
    }
    return parseInt(card)
}


// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.


// Adding reload button function
window.addEventListener("load", event => {
    document.getElementById("reset-button").onclick = function() {
        location.reload(true);
    }
});


// function test () {
//     console.log("TEST")
// }

// window.onload = function () {
//     createDeck();
//     test()
//     shuffleDeck()
// }


createDeck()
shuffleDeck()
assignValues("JC")  // All NaN returning as 11 on console log.

// works when outside of window.onload, but not inside.
console.log(deck)
console.log(number)