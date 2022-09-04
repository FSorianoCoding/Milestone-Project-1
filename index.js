// Blackjack variables

let deck = [];

let playerAce = 0;
let dealerAce = 0;

let playerScore = 0;  
let dealerScore = 0; 

let hitButton = document.getElementById("hit-button");
hitButton.addEventListener("click", hit)

let stayButton = document.getElementById("stay-button");
stayButton.addEventListener("click", stay)

let results = document.getElementById("gameResults")

let faceDown




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
    
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}




// Code to assign a value to the cards based on first index of card string.
// A = 11, J/Q/K = 10, numbers = their number parsed into an integer
function assignValues (card) {
    number = card[0]
    if (isNaN(number)) {  
        if (number == "A") {
            return number = 1;            
        } 
    else return number = 10        
    }
    return parseInt(card)
}


//  How to account for more than one Ace in your hand.
//  Get rid of global ace count and have it account only per player or dealer aces.
function getAces(card) {    
    if (card[0] == 'A') {
        return 1
    }
    else return 0
}


function adjustPScore(playerScore, playerAce) {
    
    while (playerAce > 0 && playerScore < 12) {
        playerScore += 10;
        playerAce -= 1;
    }
    return playerScore
}

function adjustDScore(dealerScore, dealerAce) {
    
    while (dealerAce > 0 && dealerScore < 12) {
        dealerScore += 10;
        dealerAce -= 1;
    }
    return dealerScore
}


function startGame () {
    // set faceDown card and assign value for dealer
    // add value to facedown card
    faceDown = deck.shift()
    dealerScore += assignValues(faceDown)
    dealerAce += getAces(faceDown)
    
    // add face up card 
    // Need to create <img src="./cards/CARD.png">
    for (let i=0; i < 1; i++) {
        let cardImg = document.createElement("img");
        let card = deck.shift();        
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("dealerHand").append(cardImg);        
        // add dealerScore value
        dealerScore += assignValues(card);
        dealerAce += getAces(card)
    }

    // set two cards for player, iterate twice
    for (let i=0; i < 2; i++) {
        let cardImg = document.createElement("img");
        let card = deck.shift();        
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("playerHand").append(cardImg)        
        // add playerScore value
        playerScore += assignValues(card);
        playerAce += getAces(card) 
    }
}


function faceDownCardFlip() {
    document.getElementById("faceDown").src = "./cards/" + faceDown + ".png";
}


// Hit function that appends card to players hand.
function hit() {
    let cardImg = document.createElement("img");
    let card = deck.shift();        
    cardImg.src = "./cards/" + card + ".png";
    document.getElementById("playerHand").append(cardImg);
        
    // add dealerScore value
    playerScore += assignValues(card);
    playerAce += getAces(card);
            
    if (adjustPScore(playerScore, playerAce) >= 21) {
        hitButton.removeEventListener("click", hit)
    }

    if (adjustPScore(playerScore, playerAce) > 21) {
        results.innerText = "You Lose!"
        document.getElementById("dealerScore").innerText = dealerScore        
        faceDownCardFlip()
    }
    document.getElementById("playerScore").innerText = playerScore
}



// Stay function to end game.
function stay() {
    
    // Lower ace code is not working, will just have to count as 11.
    playerScore = adjustPScore(playerScore, playerAce);
    document.getElementById("playerScore").innerText = playerScore;
  
    faceDownCardFlip()
    dealerScore = adjustDScore(dealerScore, dealerAce);
    // document.getElementById("dealerScore").innerText = dealerScore
    
    // Code for if dealer is <= 21 && < playerSum, to draw a card
    while (dealerScore <= playerScore && dealerScore < 17) {
        let cardImg = document.createElement("img");
        let card = deck.shift();        
        cardImg.src = "./cards/" + card + ".png";
        document.getElementById("dealerHand").append(cardImg);
        dealerScore += assignValues(card);
        dealerAce += getAces(card);        
    } 
    
    dealerScore = adjustDScore(dealerScore, dealerAce);
    document.getElementById("dealerScore").innerText = dealerScore

    hitButton.removeEventListener("click", hit)

    
    if (playerScore <= 21 && playerScore > dealerScore ) {
        results.innerText = "You Win!"
    }
    else if (dealerScore > 21) {
        results.innerText = "You Win!"
    }
    else if (playerScore > 21) {
        results.innerText = "You Lose."
    }
    else if (playerScore < dealerScore && playerScore <= 21) {
        results.innerText = "You Lose."
    }
    else if (playerScore == dealerScore) {
        results.innerText = "Tie."
    }

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
startGame()
// assignValues("5C") 
// getAces("AD") // provides one Ace
// getAces("AC") // provides two Aces
// getAces("A-H") // gives 3 aces
// assignValues("KC")
// assignValues("AC")
// hit()
// stay()
// playerAce += getAces("A-D")
// playerAce += getAces("AC")
// // works when outside of window.onload, but not inside.
console.log(deck)
// console.log(number)
// hit()
// console.log(aceAmount)

console.log(dealerScore)  // dealer score is adding up.
console.log(dealerAce)

console.log(playerScore)  // player score adding up
// console.log(faceDown)  // Shows value of card.
console.log(playerAce)