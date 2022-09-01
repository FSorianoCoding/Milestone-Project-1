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




// Once you have cards, how to account for keeping them 21 and under or for the AI winning if they have 21 and under, but above yours.

// TALLY HOW MANY TIMES PERSON HAS WON.  
// LOCAL STORAGE and how to implement in the game.  Way to clear your cookies?

// Adding reload button function
window.addEventListener("load", event => {
    document.getElementById("reset-button").onclick = function() {
        location.reload(true);
    }
});