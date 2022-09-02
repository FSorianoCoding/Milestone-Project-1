// Blackjack
// SIMPLE GAME

// Find code for that accounts for a single deck of cards.  Reshuffles the deck after each game.
// Define variable I will need to create a deck and use with functions.
let deck = []

// Images will not be applied yet so need to create arrays of card numbers and matching suits.


// Need to assign numbers to each suit and push that into the deck to create a playable deck.
function createDeck() {
    deck = [];   // was not working with "let deck = []"

    let suits = ["C", "D", "H", "S"]  
    // clubs, diamonds, hearts, spades.
    
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    // forgot to add "10", was only getting 48 values initially.

    for (let i=0; i < numbers.length; i++) {
        // everywhere tried to have me concat to combine the arrays instead of adding the values of each array.
        for (let s=0; s < suits.length; s++) {
            deck.push(numbers[i] + suits[s])
            }
    }
    return deck
}
// console.log(deck)
// Array now returning combined values for a "deck of 52"


// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.


// Adding reload button function
window.addEventListener("load", event => {
    document.getElementById("reset-button").onclick = function() {
        location.reload(true);
    }
});



window.onload = function () {
    createDeck()
}

// works when outside of window.onload, but not inside.
// createDeck()
console.log(deck)