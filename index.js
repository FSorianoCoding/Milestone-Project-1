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

// how to randomize array?
function shuffleDeck() {
    // Found the Durstenfeld shuffle to shuffle an array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.


// Adding reload button function
window.addEventListener("load", event => {
    document.getElementById("reset-button").onclick = function() {
        location.reload(true);
    }
});


function test () {
    console.log("TEST")
}

window.onload = function () {
    createDeck();
    test()
}

// works when outside of window.onload, but not inside.
// createDeck()
console.log(deck)

// test() works but createDeck() doesn't inside of window.onload
