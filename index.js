// Blackjack
// SIMPLE GAME

// Find code for that accounts for a single deck of cards.  Reshuffles the deck after each game.
// How to account for user and AI both getting cards.
// async function drawCards() {

//     let response = await fetch('https://www.deckofcardsapi.com/api/deck/qdw3bc0ckqi9/draw/?count=2')
//     let drawnCards = await response.json()
//     console.log(drawnCards)
// }
// drawCards()

// async function shuffleDeck() {

//     let response = await fetch('https://www.deckofcardsapi.com/api/deck/qdw3bc0ckqi9/shuffle/')
//     let shuffle = await response.json()
//     console.log(shuffle)
// }
// shuffleDeck()

// Could get API to work, but could not figure out how to apply it to a my own JS or HTML. Not enough experience with json.



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
createDeck()
console.log(deck)

// returns ['AC,D,H,S', '2C,D,H,S', '3C,D,H,S', '4C,D,H,S', '5C,D,H,S', '6C,D,H,S', '7C,D,H,S', '8C,D,H,S', '9C,D,H,S', 'JC,D,H,S', 'QC,D,H,S', 'KC,D,H,S']

// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.

// TALLY HOW MANY TIMES PERSON HAS WON.  
// LOCAL STORAGE and how to implement in the game.  Way to clear your cookies?

// Adding reload button function
window.addEventListener("load", event => {
    document.getElementById("reset-button").onclick = function() {
        location.reload(true);
    }
});