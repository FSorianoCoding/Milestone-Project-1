// Blackjack
// SIMPLE GAME

// Find code for that accounts for a single deck of cards.  Reshuffles the deck after each game.
// Define variable I will need to create a deck and use with functions.
let deck = [];
let aceAmount = 0;

let playerAce = 0;
let dealerAce = 0;

let playerScore = 0;  
let dealerScore = 0; 

// function combines suits and numbers to create a deck of cards.
function createDeck() {
    deck = [];   
    let suits = ["C", "D", "H", "S"]  
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    
    for (let i=0; i < numbers.length; i++) {   
        for (let s=0; s < suits.length; s++) {
            deck.push(numbers[i] + "-" + suits[s])
        }    
    }
    return deck
}


// Shuffles the deck to be used to draw random cards for dealer and player hands.
function shuffleDeck() {
    // Found the Durstenfeld algorithm to shuffle an array
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Code to assign a value to the cards based on first index of card string
// A = 11, J/Q/K = 10, numbers = their number parsed into an integer
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


//  How to account for more than one Ace in your hand.
function getAces (card) {    
    if (card[0] == 'A') {
        return aceAmount += 1
    }
    else aceAmount = 0
}



function startGame () {
    // set faceDown card and assign value for dealer
    // add value to facedown card
    faceDown = deck.shift()
    dealerScore = assignValues(faceDown)
    // add face up card 
    // Need to create <img src="./cards/CARD.png">
    for (let i=0; i < 1; i++) {
        let cardImg = document.createElement("img");
        let card = deck.shift();
        
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("dealerHand").append(cardImg)
        
        // add dealerScore value
        dealerScore += assignValues(card)
    }

    // set two cards for player, iterate twice
    for (let i=0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.shift();
        
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("playerHand").append(cardImg)
        
        // add playerScore value
        playerScore += assignValues(card)        
    }
}


// Need to a add code to account for more than two Ace to keep initial values under 21
// function adjustScore (score, aces) {
//     let score = dealerScore
// }


// create hit and stay buttons
function hit() {
    let cardImg = document.createElement("img");
    let card = deck.shift();
        
    cardImg.src = "./cards/" + card + ".png";
    document.getElementById("playerHand").append(cardImg)
        
    // add dealerScore value
    playerScore += assignValues(card)
}




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
assignValues("5C") 
getAces("AD") // provides one Ace
getAces("AC") // provides two Aces
getAces("A-H") // gives 3 aces
// assignValues("KC")
// assignValues("AC")


// works when outside of window.onload, but not inside.
console.log(deck)
console.log(number)
console.log(aceAmount)

startGame()
console.log(dealerScore)  // dealer score is adding up.
console.log(playerScore)  // player score adding up