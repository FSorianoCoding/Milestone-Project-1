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
// Find a way to use iterate with for loops
let suits = ["C", "D", "H", "S"]  // clubs, diamonds, hearts, spades.
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]

// Merging arrays will only create an array of A-K and C,D,H,S.  
// Need to assign numbers to each suit and push that into the deck to create a playable deck.

deck.push(suits[0] + numbers[0])
console.log(deck)


// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.

// TALLY HOW MANY TIMES PERSON HAS WON.  
// LOCAL STORAGE and how to implement in the game.  Way to clear your cookies?

// Adding reload button function
window.addEventListener("load", event => {
    document.getElementById("reset-button").onclick = function() {
        location.reload(true);
    }
});